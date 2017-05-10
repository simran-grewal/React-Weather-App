var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=92b06ebfa2204ea1e396022b8b6a2f27&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return  axios.get(requestUrl).then(function(res){
    debugger;
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else{
          return res.data.main.temp;
      }
    }, function(res){
        throw new Error('Unable to fetch weather for that location');
    });
  }
}
