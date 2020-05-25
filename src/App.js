import React from 'react';
import Question from './components/Question/Question';
import WeatherCard from './components/WeatherCard/WeatherCard';
import './App.css';

class App extends React.Component {
constructor (props) {
  super(props);
  this.state = {
    hidden: true,
    weatherData: 'null'
  }
  this.handleClick = this.handleClick.bind(this);
}

  async handleClick () {
    let city = document.querySelector('#city').value;
    let url = 'http://api.weatherstack.com/current?access_key=d69b4f393201117902949f06c502e6aa&query=' + city;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      weatherData: data,
      hidden: false
    })
    
      
}

  render () {
    return (
    <div className="weather-wrapper">
      <Question handler={this.handleClick}/>
      <div className="weathercards-holder">
        <WeatherCard hidden={this.state.hidden} info={this.state.weatherData} />
      </div>
    </div>
    );
  }
}

export default App;