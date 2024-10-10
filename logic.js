import { fillHtmlWithData } from './display.js';

async function getWeatherData(location, dayId=0){
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=M3RJ39PEGKF2ADNXQ3FVYBYPT`, 
            
            {
                mode: 'cors'
            }
        )
        let data = await response.json();
        fillHtmlWithData(data, dayId);
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

function changeTemperatureType(temperature, type){
    if(type == 'celsius'){
        return (temperature - 30) / 1.8;    
    }
    else{
        return(temperatureInCelsius * 1.8) + 32;    
    }
}

function clearDisplay(){
    const containers = document.querySelectorAll('.container');
    containers.forEach((container) => container.remove());
}

const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault(), clearDisplay(), getWeatherData(getInputData());
});

getWeatherData('Eger');