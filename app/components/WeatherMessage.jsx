var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
        <div>
          <h3 id = "weatherMessage" className = "text-center">It's {temp} Degree in {location}</h3>
        </div>
      )
};

module.exports = WeatherMessage;
