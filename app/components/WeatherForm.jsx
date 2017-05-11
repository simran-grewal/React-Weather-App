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
        <input type = "search" placeholder = "Search Weather by City" ref = "location" />
        <button className = "button hollow expanded" >Get Weather</button>
        </form>
    </div>
    );
  }
});


module.exports = WeatherForm;
