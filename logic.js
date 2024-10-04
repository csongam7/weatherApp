import { display } from './display.js';

async function getWeatherData(location){
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=M3RJ39PEGKF2ADNXQ3FVYBYPT`, 
            {
                mode: 'cors'
            }
        )
        const data = await response.json();
        display(data);
    }
    catch(error){
        console.error('There was a problem with the fetch operation:' + error);
    }
}

function getInputData(){
    const form = document.querySelector('#form');
    const inputValue = form.address.value;
    return inputValue;
}

export function returnIconForFocusedWeather(weather, time, sunset){
    switch(weather){
        case 'rain' :
            if(time > sunset){
                return 'assets/rainNight.png';
            }
            return 'assets/rainy.png';
        
        case 'snow' :
            return 'assets/snow.png';
        case 'cloudy':
        case 'partly-cloudy-day':
            return 'assets/cloudy.png';
        case 'partly-cloudy-night':
            return 'assets/cloudyNight.png';
        case 'clear-day':
            return 'assets/sunny.png';
        case 'clear-night':
            return 'assets/waxing-moon.png';
        case 'wind' :
            return 'assets/wind.png';
        case 'fog':
            return 'assets/fog.png';
        }

}

function fahrenheitToCelsius(temperatureInFahrenheit){
    temperatureInCelsius = (temperatureInFahrenheit-30) / 1.8;
    return temperatureInCelsius;
}

function celsiusToFahrenheit(temperatureInCelsius){
    temperatureInFahrenheit = (temperatureInCelsius*1.8) + 32;
    return temperatureInFahrenheit;
}

function clearDisplay(){
    const containers = document.querySelectorAll('.container');
    containers.forEach((container) => container.remove());
}

const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault(), clearDisplay(), getWeatherData(getInputData());
});