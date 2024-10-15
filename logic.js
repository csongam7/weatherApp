import { fillHtmlWithData } from './display.js';

let temperatureUnit = 'fahrenheit';
async function getWeatherData(location, dayId=0){
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=M3RJ39PEGKF2ADNXQ3FVYBYPT`, 
            
            {
                mode: 'cors'
            }
        )
        let data = await response.json();
        fillHtmlWithData(data, dayId, temperatureUnit);
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

export function returnIconForFocusedWeather(weather, time, sunset=19){
    switch(weather){
        case 'rain' :
            if(time > sunset){
                return 'assets/rainNight.png';
            }
            return 'assets/rainy.png';
        case 'snow' :
            return 'assets/snow.png';
        case 'overcast':
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

export function changeTemperatureType(changeTo){
    const allTemperatures = document.querySelectorAll('.temperature');
    if(changeTo == 'celsius'){
        allTemperatures.forEach((temperature) => temperature.innerHTML = Number((temperature.innerHTML.slice(0,-2) - 32) / 1.8).toFixed(1) + '˚C');
        document.querySelector('#celsius').classList.add('activeUnit');
        document.querySelector('#fahrenheit').classList.remove('activeUnit');
        temperatureUnit = 'celsius';        
    }
    else if(changeTo == 'fahrenheit'){
        allTemperatures.forEach((temperature) => temperature.innerHTML = Number((temperature.innerHTML.slice(0,-2) * 1.8) + 32).toFixed(1) + '˚F');
        document.querySelector('#celsius').classList.remove('activeUnit');
        document.querySelector('#fahrenheit').classList.add('activeUnit');
        temperatureUnit = 'fahrenheit';
    }
}

const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault(), getWeatherData(getInputData());
});

getWeatherData('Eger');