var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location); // Calling parent function
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
        <input type = "text" placeholder = "Enter the City" ref = "location" />
        <button className = "centered column button" >Get Weather</button>
        </form>
    </div>
    );
  }
});


module.exports = WeatherForm;
