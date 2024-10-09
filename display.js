import { returnIconForFocusedWeather } from "./logic.js";


export function display(weatherData, dayId){
    
    console.log(weatherData);

    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';
    mainContainer.className = 'container';
    document.body.appendChild(mainContainer);
//header
    const header = document.createElement('div');
    header.id = 'header';
    header.className = 'header';
    const catsAndDogsInnit = document.createElement('div');
    catsAndDogsInnit.id = 'catsAndDogsInnit';
    header.appendChild(catsAndDogsInnit);
    catsAndDogsInnit.innerHTML = 'catsadsada'
    //current date
    const currentDate = document.createElement('div');
    currentDate.id = 'currentDate';
    currentDate.className = 'currentDate';
    currentDate.innerHTML = weatherData.days[0].datetime;
    header.appendChild(currentDate);
    
    mainContainer.appendChild(header);
//middleContainer
    const middleContainer = document.createElement('div');
    middleContainer.id = 'middleContainer';
    middleContainer.className = 'container';
    mainContainer.appendChild(middleContainer);
    //previous day 
    /*
    const previousDayButton = document.createElement('button');
    previousDayButton.id = 'previousDayButton';
    previousDayButton.className = 'dayChangeButton';
    middleContainer.appendChild(previousDayButton);
    previousDayButton.innerHTML = '<';
    */
    //focused weather container
    const focusedWeatherContainer = document.createElement('div');
    focusedWeatherContainer.id = 'focusedWeatherContainer';
    focusedWeatherContainer.className = 'container';
    middleContainer.appendChild(focusedWeatherContainer);
    //focused weather data container
    const focusedWeatherDataContainer = document.createElement('div')
    focusedWeatherDataContainer.id = 'focusedWeatherDataContainer';
    focusedWeatherDataContainer.class = 'container';
    focusedWeatherContainer.appendChild(focusedWeatherDataContainer);
    //focused max temperature
    /*const focusedMaxTemp = document.createElement('div');
    focusedMaxTemp.id = 'focusedMaxTemp';
    focusedMaxTemp.innerHTML = weatherData.currentConditions
    const maxTempIcon = document.createElement('img');
    maxTempIcon.id = 'focusedMaxTempIcon';*/
    //focused midTemperature
    const focusedmidTemperature = document.createElement('span');
    focusedmidTemperature.id = 'focusedmidTemperature';
    focusedmidTemperature.className = 'focusedWeatherData';
    focusedmidTemperature.innerHTML = `Temperature: ${weatherData.currentConditions.temp}`;
    focusedWeatherDataContainer.appendChild(focusedmidTemperature);
    //focused weather icon
    const focusedWeatherIcon = document.createElement('img');
    focusedWeatherIcon.id = 'focusedWeatherIcon';
    focusedWeatherIcon.className = 'icon';
    focusedWeatherIcon.src = returnIconForFocusedWeather(weatherData.currentConditions.icon, parseInt(weatherData.currentConditions.datetime), parseInt(weatherData.currentConditions.sunset))
    focusedWeatherContainer.appendChild(focusedWeatherIcon);
    //focused weather min, max current temperature
    const focusedTemperatureContainer = document.createElement('div');
    focusedTemperatureContainer.id = 'focusedTemperatureContainer';
    focusedTemperatureContainer.className = 'container';
    const focusedMinTemperature = document.createElement('span');
    focusedMinTemperature.innerHTML = Math.round(weatherData.days[dayId].tempmin);
    focusedMinTemperature.id = 'focusedMinTemperature';
    focusedMinTemperature.className = 'focusedSmallTemp';
    focusedTemperatureContainer.appendChild(focusedMinTemperature);
    if(dayId == 0){
        const focusedCurrentTemperature = document.createElement('span');
        focusedCurrentTemperature.innerHTML = Math.round(weatherData.currentConditions.temp);
        focusedCurrentTemperature.id = 'focusedCurrentTemperature';
        focusedCurrentTemperature.className = 'focusedBigTemp';
        focusedTemperatureContainer.appendChild(focusedCurrentTemperature);
    }
    const focusedMaxTemperature = document.createElement('span');
    focusedMaxTemperature.innerHTML = Math.round(weatherData.days[dayId].tempmax);
    focusedMaxTemperature.id = 'focusedMaxTemperature';
    focusedMaxTemperature.className = 'focusedSmallTemp';
    focusedTemperatureContainer.appendChild(focusedMaxTemperature);
    focusedWeatherContainer.appendChild(focusedTemperatureContainer);
    //searched location
    const searchedLocation = document.createElement('span');
    searchedLocation.id = 'searchedLocation';
    searchedLocation.className = 'searchedLocation';
    searchedLocation.innerHTML = weatherData.resolvedAddress;
    focusedWeatherContainer.appendChild(searchedLocation)
    //focused wind
    const focusedWindPower = document.createElement('div');
    focusedWindPower.id = 'focusedWindPower';
    const focusedWindPowerTitle = document.createElement('span');
    focusedWindPowerTitle.innerHTML = 'Wind power';
    focusedWindPowerTitle.className = 'weatherDataTitle';
    focusedWindPower.appendChild(focusedWindPowerTitle);
    focusedWindPower.className = 'focusedWeatherData';
    focusedWindPower.innerHTML = weatherData.currentConditions.windspeed;
    focusedWeatherDataContainer.appendChild(focusedWindPower);
    //focused feels like temp
    const feelsLike = document.createElement('div');
    feelsLike.id = 'feelsLike';
    const feelsLikeTitle = document.createElement('span');
    feelsLikeTitle.innerHTML = 'Feels like';
    feelsLikeTitle.className = 'weatherDataTitle';
    feelsLike.appendChild(feelsLikeTitle);
    feelsLike.className = 'focusedWeatherData';
    feelsLike.innerHTML = `Feels like: ${weatherData.currentConditions.feelslike}`;
    focusedWeatherDataContainer.appendChild(feelsLike);
    //focused rainprob
    const rainProb = document.createElement('div');
    rainProb.id = 'focusedRainProb';
    const rainProbTitle = document.createElement('span');
    rainProbTitle.innerHTML = 'Rain probability';
    rainProbTitle.className = 'weatherDataTitle';
    rainProb.appendChild(rainProbTitle);
    rainProb.className = 'focusedWeatherData';
    rainProb.textContent = `Rain: ${weatherData.currentConditions.precipprob} %`
    focusedWeatherDataContainer.appendChild(rainProb);
    //focused sunrise
    const sunrise = document.createElement('div');
    const sunriseTitle = document.createElement('span');
    sunriseTitle.innerHTML = 'Sunrise';
    sunriseTitle.className = 'weatherDataTitle';
    sunrise.appendChild(sunriseTitle);
    sunrise.id = 'sunrise';
    sunrise.className = 'focusedWeatherData';
    sunrise.innerHTML = weatherData.currentConditions.sunrise.substring(0,5);
    focusedWeatherDataContainer.appendChild(sunrise);
    //focused sunset
    const sunset = document.createElement('div');
    const sunsetTitle = document.createElement('span')
    sunsetTitle.textContent = 'Sunset';
    sunsetTitle.className = 'weatherDataTitle';
    sunset.id = 'sunset';
    sunset.className = 'focusedWeatherData';
    sunset.innerHTML = weatherData.currentConditions.sunset.substring(0,5);
    focusedWeatherDataContainer.appendChild(sunset);
//maybe I'll add more things here later///
    //next day button
    /*
    const nextDayButton = document.createElement('button');
    nextDayButton.id = 'nextDayButton';
    nextDayButton.className = 'dayChangeButton';
    nextDayButton.innerHTML = '>';
    middleContainer.appendChild(nextDayButton);
*/

const mainContainerFooter = document.createElement('div');
    mainContainerFooter.id = 'mainContainerFooter';
    mainContainerFooter.className = 'container';
    createNextDaysContainers();
    mainContainer.appendChild(mainContainerFooter);

    //next hours temperature & weather container
    const nextHoursSlider = document.createElement('div');
    nextHoursSlider.id = 'nextHoursSlider';
    nextHoursSlider.className = 'swiper';
    focusedWeatherContainer.appendChild(nextHoursSlider);

    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'swiper-wrapper'
    nextHoursSlider.appendChild(sliderWrapper);

    const cardList = document.createElement('div');
    cardList.className = 'cardList';
    cardList.classList.add('swiper-wrapper');
    sliderWrapper.appendChild(cardList);
/*
    const previousTimeButton = document.createElement('button');
    previousTimeButton.id = 'prevTimeButton';
    previousTimeButton.className = 'sliderButton'
    previousTimeButton.innerHTML = '<';
    nextHoursSlider.appendChild(previousTimeButton)
    const nextTimeButton = document.createElement('button');
    nextTimeButton.id = 'nextTimeButton';
    nextTimeButton.className = 'sliderButton'
    nextTimeButton.innerHTML = '>';
    nextHoursSlider.appendChild(nextTimeButton)
  */  
    createNextHoursCards();
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
            rainPercentage.innerHTML = weatherData.days[i].precipcover;
            nextDaysWeathers.appendChild(rainPercentage);
            mainContainerFooter.appendChild(nextDaysWeathers);
        }
    }
}