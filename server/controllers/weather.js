const rp = require('request-promise');

module.exports = {
  getWeather: (req, res) => {
    console.log('in here!')
    const latitude = req.query.latitude || 43.644;
    const longitude = req.query.longitude || -79.391;
    const time = req.query.time || `2017-04-05T16:00:00`
    const date = time.slice(0,10) || '2017-04-05'
    const timeofDay = time.slice(10) || 'T16:00:00'

    const weatherObj = {};
    let options = {
      url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${latitude},${longitude},${date}${timeofDay}`,
      headers: {
        contentType: 'application/json',
      },
    }
    rp(options)
    .then((result) => {
      console.log(result)
      var parsedResult = JSON.parse(result)
       weatherObj.highTemp = parsedResult.daily.data[0].temperatureMax
       weatherObj.lowTemp = parsedResult.daily.data[0].temperatureMin
       weatherObj.summary = parsedResult.daily.data[0].summary
       weatherObj.date = date;
       weatherObj.timeofDay = timeofDay;
      res.send(weatherObj)
    })
  }
}
