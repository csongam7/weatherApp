import { display } from "./display.js";

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

function fahrenheitToCelsius(temperatureInFahrenheit){
    temperatureInCelsius = (temperatureInFahrenheit-30) / 1.8;
    return temperatureInCelsius;
}

function celsiusToFahrenheit(temperatureInCelsius){
    temperatureInFahrenheit = (temperatureInCelsius*1.8) + 32;
    return temperatureInFahrenheit;
}

const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault(), getWeatherData(getInputData());
});

