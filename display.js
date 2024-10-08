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
    const previousDayButton = document.createElement('button');
    previousDayButton.id = 'previousDayButton';
    previousDayButton.className = 'dayChangeButton';
    middleContainer.appendChild(previousDayButton);
    previousDayButton.innerHTML = '<';
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
    /*
    //focused weather description
    const focusedWeatherDescription = document.createElement('span');
    focusedWeatherDescription.id = 'focusedWeatherDescription';
    focusedWeatherDescription.className = 'focusedWeatherData';
    focusedWeatherDescription.innerHTML = weatherData.currentConditions.conditions;
    focusedWeatherContainer.appendChild(focusedWeatherDescription);
    */
    //searched location
    const searchedLocation = document.createElement('span');
    searchedLocation.id = 'searchedLocation';
    searchedLocation.className = 'searchedLocation';
    searchedLocation.innerHTML = weatherData.resolvedAddress;
    focusedWeatherContainer.appendChild(searchedLocation)
    //focused wind
    const focusedWindPower = document.createElement('span');
    focusedWindPower.id = 'focusedWindPower';
    focusedWindPower.className = 'focusedWeatherData';
    focusedWindPower.innerHTML = weatherData.currentConditions.windspeed;
    focusedWeatherDataContainer.appendChild(focusedWindPower);
    //focused feels like temp
    const feelsLike = document.createElement('span');
    feelsLike.id = 'feelsLike';
    feelsLike.className = 'focusedWeatherData';
    feelsLike.innerHTML = `Feels like: ${weatherData.currentConditions.feelslike}`;
    focusedWeatherDataContainer.appendChild(feelsLike);
    //focused rainprob
    const rainProb = document.createElement('span');
    rainProb.id = 'focusedRainProb';
    rainProb.className = 'focusedWeatherData';
    rainProb.innerHTML = `Rain probability: ${weatherData.currentConditions.precipprob} %`
    focusedWeatherDataContainer.appendChild(rainProb);
    //focused sunrise
    const sunrise = document.createElement('span');
    sunrise.id = 'sunrise';
    sunrise.className = 'focusedWeatherData';
    sunrise.innerHTML = weatherData.currentConditions.sunrise.substring(0,5);
    focusedWeatherDataContainer.appendChild(sunrise);
    //focused sunset
    const sunset = document.createElement('span');
    sunset.id = 'sunset';
    sunset.className = 'focusedWeatherData';
    sunset.innerHTML = weatherData.currentConditions.sunset.substring(0,5);
    focusedWeatherDataContainer.appendChild(sunset);
//maybe I'll add more things here later///
    //next day button
    const nextDayButton = document.createElement('button');
    nextDayButton.id = 'nextDayButton';
    nextDayButton.className = 'dayChangeButton';
    nextDayButton.innerHTML = '>';
    middleContainer.appendChild(nextDayButton);

    const nextHoursSlider = document.createElement('div');
    nextHoursSlider.id = 'nextHoursSlider';
    nextHoursSlider.class = 'slider';
    middleContainer.appendChild(nextHoursSlider);
    createNextHoursContainers();

    const mainContainerFooter = document.createElement('div');
    mainContainerFooter.id = 'mainContainerFooter';
    mainContainerFooter.className = 'container';
    createNextDaysContainers();
    mainContainer.appendChild(mainContainerFooter);

    function createNextHoursContainers(){
        let time = parseInt(weatherData.currentConditions.datetime.split(':')[0]);
        let dayIndex = 0;
        for(let i = 0; i <= 24; i++){
            const nextHourContainer = document.createElement('div');
            nextHourContainer.className = 'nextHourContainer';
            nextHourContainer.id = `${time}HourContainer`;
            //display the next hour's time
            const nextHourTime = document.createElement('span');
            nextHourTime.className = 'nextHourTime';
            if(time < 10){
                nextHourTime.innerHTML = `0${time}:00`;
            }
            else{
                nextHourTime.innerHTML = `${time}:00`;
            }
            nextHourContainer.appendChild(nextHourTime);
            //change to the next day if necessary
            if(time == 23){
                time = 0;
                dayIndex = 1;
            }
            const nextHourTemperature = document.createElement('span');
            nextHourTemperature.innerHTML = weatherData.days[dayIndex].hours[time].temp;
            nextHourContainer.appendChild(nextHourTemperature);


            //nextHourIcon.src = ...
            time++;
        }
    }

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