import { returnIconForFocusedWeather, changeTemperatureType } from "./logic.js";

document.querySelector('#celsius').addEventListener('click', function(){changeTemperatureType('celsius')});
document.querySelector('#fahrenheit').addEventListener('click', function(){changeTemperatureType('fahrenheit')});

export function fillHtmlWithData(weatherData, dayId, temperatureUnit){
    console.log(weatherData);
//focused weather
    //searched location
    document.querySelector('.searchedLocation').innerHTML = weatherData.resolvedAddress;
    //big icon
    document.querySelector('#focusedWeatherIcon').src = returnIconForFocusedWeather(weatherData.currentConditions.icon, parseInt(weatherData.currentConditions.datetime), parseInt(weatherData.currentConditions.sunset));
    //the three main temperatures
    document.querySelector('#focusedLowestTemperature').innerHTML = Number(weatherData.days[dayId].tempmin.toFixed(1)) + '˚F';
    document.querySelector('#currentTemperature').innerHTML = Number(weatherData.currentConditions.temp.toFixed(1)) + '˚F';
    document.querySelector('#focusedHighestTemperature').innerHTML = Math.round(weatherData.days[dayId].tempmax) + '˚F';
    document.querySelector('#feelsLike').innerHTML = Number(weatherData.days[dayId].feelslike.toFixed(1)) + '˚F';
    if(temperatureUnit == 'celsius'){
        changeTemperatureType('celsius');
    }

    document.querySelector('#humidity').innerHTML = Math.round(weatherData.days[dayId].humidity) + '%';
    document.querySelector('#sunset').innerHTML = weatherData.days[dayId].sunset.substring(0,5);
    document.querySelector('#sunrise').innerHTML = weatherData.days[dayId].sunrise.substring(0,5);
    document.querySelector('#rainChance').innerHTML = Math.round(weatherData.days[dayId].precipprob) + '%';
    document.querySelector('#windPwr').innerHTML = Math.round(weatherData.days[dayId].windspeed) + 'mph';
    document.querySelector(`#${temperatureUnit}`).classList.add('activeUnit');    
    

    //createNextHoursCards();
    function createNextHoursCards(){
        let time = parseInt(weatherData.currentConditions.datetime.split(':')[0])+1;
        let dayIndex = 0;
        for(let i = 0; i <= 24; i++){
            const nextHourCard = document.createElement('div');
            const nextHourCardHeader = document.createElement('div');
            nextHourCard.appendChild(nextHourCardHeader);
            nextHourCardHeader.className = 'nextHourCardHeader';
            nextHourCard.classList.add('swiper-slide');
            nextHourCard.classList.add('nextHourCard');
            nextHourCard.id = `${time}HourContainer`;
            //display the next hour's time
            const nextHourTime = document.createElement('span');
            nextHourTime.className = 'nextHourTime';
            if(time < 10){
                nextHourTime.innerHTML = `0${time}:00`;
            }
            else{
                nextHourTime.innerHTML = `${time}:00`;
            }
            nextHourCardHeader.appendChild(nextHourTime);

            //change to the next day if necessary
            if(time == 23){
                time = 0;
                dayIndex++;
            }
            const rainPercentage = document.createElement('span');
            rainPercentage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M558-84q-15 8-30.5 2.5T504-102l-60-120q-8-15-2.5-30.5T462-276q15-8 30.5-2.5T516-258l60 120q8 15 2.5 30.5T558-84Zm240 0q-15 8-30.5 2.5T744-102l-60-120q-8-15-2.5-30.5T702-276q15-8 30.5-2.5T756-258l60 120q8 15 2.5 30.5T798-84Zm-480 0q-15 8-30.5 2.5T264-102l-60-120q-8-15-2.5-30.5T222-276q15-8 30.5-2.5T276-258l60 120q8 15 2.5 30.5T318-84Zm-18-236q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z"/></svg>' + Math.round(weatherData.days[dayIndex].hours[time].precipprob)+'%';
            rainPercentage.className = 'nextHourRain';
            nextHourCard.appendChild(rainPercentage);
            const nextHourTemperature = document.createElement('span');
            nextHourTemperature.className = 'nextHourTemp';
            nextHourTemperature.classList.add('temp');
            nextHourTemperature.innerHTML = Math.round(weatherData.days[dayIndex].hours[time].temp);
            nextHourCard.appendChild(nextHourTemperature);
            const icon = document.createElement('img');
            icon.src = returnIconForFocusedWeather(weatherData.days[dayIndex].hours[time].icon, time);
            icon.className = 'nextHoursIcon';
            nextHourCard.appendChild(icon);
            cardList.appendChild(nextHourCard);
            time++;
        }
    }

    const nextButton = document.createElement('div');
    nextButton.className='swiper-button-next';
    const previousButton = document.createElement('div');
    previousButton.className = 'swiper-button-previous';

    function createNextDaysContainers(){
        for(let i = 1; i < 15; i++){
            const nextDaysWeatherSlider = document.createElement('div');
            nextDaysWeatherSlider.id = 'nextDaysWeatherSlider';

            const nextDaysWeathers = document.createElement('div');
            nextDaysWeathers.id = `${i}daysWeather`;
            nextDaysWeathers.className = 'nextDaysWeather';
            //next day's mid temperature
            const midTemperature = document.createElement('span');
            midTemperature.id = `${i}dayMidTemperature`;
            midTemperature.innerHTML = weatherData.days[i].temp;
            nextDaysWeathers.appendChild(midTemperature);
            //icon
            const icon = document.createElement('span');
            icon.id = `${i}daysIcon`;
            icon.alt = `${weatherData.days[i].icon}.png`
            icon.className = 'nextDaysWeatherIcon';
            nextDaysWeathers.appendChild(icon);
            
            const rainPercentage = document.createElement('span');
            rainPercentage.id = `${i}daysRainPercentage`;
            rainPercentage.class = 'nextDaysRainPercentage';
            rainPercentage.innerHTML = weatherData.days[i].precipprob;
            nextDaysWeathers.appendChild(rainPercentage);
            mainContainerFooter.appendChild(nextDaysWeathers);
        }
    }
}