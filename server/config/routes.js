const flightController = require('../controllers/flights.js'),
  anywhereController = require('../controllers/anywhere.js'),
  geocoderController = require('../controllers/geocoder.js'),
  hotelController = require('../controllers/hotels.js'),
  getWeatherController = require('../controllers/weather.js'),
  databaseController = require('../controllers/database.js'),
  yelp = require('../controllers/yelp.js');

module.exports = (app, express) => {
  app.get('/api/flights', flightController.getFlights);
  app.get('/api/anywhere', anywhereController.getAnywhereDummy);
  app.get('/api/geocoder', geocoderController.location);
  app.get('/api/hotels', hotelController.getHotelsDummy);
  app.get('/api/weather', getWeatherController.getWeather);
  app.get('/api/yelp', yelp.getEvents);
  app.get('/api/dbQuery', databaseController.getProfile);
};
