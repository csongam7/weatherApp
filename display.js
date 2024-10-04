export function display(weatherData){
    
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
    //searched location
    const searchedLocation = document.createElement('span');
    searchedLocation.id = 'searchedLocation';
    searchedLocation.className = 'searchedLocation';
searchedLocation.innerHTML = weatherData.resolvedAddress;
    header.appendChild(searchedLocation)
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
    //current data container
    const currentDataContainer = document.createElement('div');
    currentDataContainer.id = 'currentDataContainer';
    currentDataContainer.className = 'container';
    middleContainer.appendChild(currentDataContainer);
    //current midTemperature
    const currentmidTemperature = document.createElement('span');
    currentmidTemperature.id = 'currentmidTemperature';
    currentmidTemperature.className = 'midTemperature';
    currentmidTemperature.innerHTML = weatherData.currentConditions.temp;
    currentDataContainer.appendChild(currentmidTemperature);
    //current weather icon
    const currentWeatherIcon = document.createElement('span');
    currentWeatherIcon.id = 'currentWeatherIcon';
    currentWeatherIcon.className = 'icon';
    currentDataContainer.appendChild(currentWeatherIcon);

    const currentWindPowerContainer = document.createElement('div');
    currentWindPowerContainer.id = 'currentWindPowerContainer';
    currentWindPowerContainer.class = 'container';
    currentDataContainer.appendChild(currentWindPowerContainer);

    const currentWindPower = document.createElement('span');
    currentWindPower.id = 'currentWindPower';
    currentWindPower.class = 'currentWindPower';
    currentWindPower.innerHTML = weatherData.currentConditions.windspeed;
    currentWindPowerContainer.appendChild(currentWindPower);

    const feelsLike = document.createElement('span');
    feelsLike.id = 'feelsLike';
    feelsLike.innerHTML = weatherData.currentConditions.feelslike;
    currentDataContainer.appendChild(feelsLike);
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
            nextDaysWeathers.id = `${i}ddaysWeather`;
            nextDaysWeathers.className = 'nextDaysWeather';
            
            const midTemperature = document.createElement('span');
            midTemperature.id = `${i}dayMidTemperature`;
            midTemperature.innerHTML = weatherData.days[i].temp;
            nextDaysWeathers.appendChild(midTemperature);
            
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