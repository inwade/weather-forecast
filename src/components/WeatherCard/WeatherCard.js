import React from 'react';
import './WeatherCard.css';



function WeatherCard (props) {
    
    let city;
    let imgSource;
    let currentTemp;
    let feelsLike;
      
    if (props.info != 'null') {
    let data = props.info;
    city = data.location.name;

    imgSource = data.current.weather_icons[0];
    currentTemp = data.current.temperature;
    feelsLike = data.current.feelslike;
    console.log(data)

}
if (!props.hidden) {
    return (
    
    <div className="weather-card">
        
        <p>Location: {city}</p>
        <p className="weather-day">Today</p>
            <img src={imgSource}></img>
            <p className="temperature">Current temperature: <span> {currentTemp}</span></p>
            <p className="feel-like">Feels like: <span> {feelsLike} </span> </p>
    </div>
)
}
else {
    return (
        <div>
            <p>Please choose the city...</p>
        </div>
    )
}
}


export default WeatherCard