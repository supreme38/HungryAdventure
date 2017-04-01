const flightQuotesHelper = require('../helpers/flightQuotesHelper.js');

const rp = require('request-promise');

module.exports = {
  getFlights: (req, res) => {
    let options = {
      url: 'https://api.test.sabre.com/v2/shop/flights/fares?origin=JFK&departuredate=2017-05-01&returndate=2017-05-08&earliestdeparturedate=2017-05-01&latestdeparturedate=2017-05-01&lengthofstay=7&pointofsalecountry=US&topdestinations=12',
      headers: {
        Authorization: `Bearer ${process.env.SABRE_ACCESS_TOKEN}`,
        contentType: 'application/json',
      },
    };
    const cache = [];
    const pix = [];
    const pixObject = {};
    rp(options)
      .then((data) => {
        const flightResults = [];
        const sabreBody = JSON.parse(data);
        sabreBody.FareInfo.forEach((elem) => {
          const obj = {};
          obj[elem.DestinationLocation] = {};
          flightResults.push(obj);
        });
        const flights = [];
        flightResults.forEach((elem) => {
          const arrival = Object.keys(elem)[0];
          options = {
            url: `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/JFK/${arrival}/2017-05-01/2017-05-08?apiKey=${process.env.SKYSCANNER_API}`,
            headers: {
              contentType: 'application/json',
            },
          };
          flights.push(rp(options));
        });
        return Promise.all(flights).then((promiseElem) => {
          promiseElem.forEach((eachQueue, index) => {
            const skyBody = JSON.parse(eachQueue);
            const flightObj = flightResults[index];
            const arrivalKeyName = Object.keys(flightObj)[0];
            const parsed = flightQuotesHelper.trimSkyBody(skyBody);
            if (Object.keys(parsed).length !== 0) {
              flightObj[arrivalKeyName] = parsed;
            }
          });
          return flightResults;
        });
      })
      .catch((err) => {
        throw err;
      })
      .then((flightResults) => {
        const pixFlights = [];
        flightResults.forEach((elem, i) => {
          const arrivalKeyName = Object.keys(elem)[0];
          const destinationObj = flightResults[i][arrivalKeyName];
          if (destinationObj.location && cache.indexOf(destinationObj.location) === -1) {
            options = {
              url: `https://pixabay.com/api/?key=${process.env.PIXABAY_API}&q=${destinationObj.location}&image_type=photo&orientation=horizontal&category=travel`,
              headers: {
                contentType: 'application/json',
              },
            };
            pixFlights.push(rp(options));
          } else if (!destinationObj.location) {
            destinationObj.location = null;
          }
          if (destinationObj.location) {
            if (cache.indexOf(destinationObj.location) === -1) {
              cache.push(destinationObj.location);
            }
          }
        });
        return Promise.all(pixFlights).then((values) => {
          values.forEach((eachPic, index) => {
            const pixParsed = JSON.parse(eachPic);
            const topimages = [];
            pixParsed.hits.forEach((elem, i) => {
              if (i > 4) {
                return;
              }
              topimages.push(elem.webformatURL);
            });
            pix.push(topimages);
            pixObject[cache[index]] = topimages;
          });
          flightResults.forEach((flight, i) => {
            const arrivalKeyName = Object.keys(flight)[0];
            const destinationObj = flightResults[i][arrivalKeyName];
            if (cache.indexOf(destinationObj.location) !== -1) {
              destinationObj.imageUrl = pixObject[destinationObj.location];
            }
          });
          res.send(flightResults);
        });
      })
      .catch((err) => {
        throw err;
      });
  },
};
