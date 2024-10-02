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

    const previousDayButton = document.createElement('button');
    previousDayButton.id = 'previousDayButton';
    previousDayButton.className = 'dayChangeButton';
    middleContainer.appendChild(previousDayButton);

    const currentDataContainer = document.createElement('div');
    currentDataContainer.id = 'currentDataContainer';
    currentDataContainer.className = 'container';
    middleContainer.appendChild(currentDataContainer);

    const currentTemperature = document.createElement('span');
    currentTemperature.id = 'currentTemperature';
    currentTemperature.className = 'temperature';
    currentDataContainer.appendChild(currentTemperature);

    const currentWeatherIcon = document.createElement('span');
    currentWeatherIcon.id = 'currentWeatherIcon';
    currentWeatherIcon.className = 'icon';
    currentDataContainer.appendChild(currentWeatherIcon);

//maybe I'll add more things here later///

    const nextDayButton = document.createElement('button');
    nextDayButton.id = 'nextDayButton';
    nextDayButton.className = 'dayChangeButton';
    middleContainer.appendChild(nextDayButton);

    const mainContainerFooter = document.createElement('div');
    mainContainerFooter.id = 'mainContainerFooter';
    mainContainerFooter.className = 'container';
    createFooterContainers();
    mainContainer.appendChild(mainContainerFooter);

    function createFooterContainers(){
        for(let i = 1; i < 24; i++){
            const nextHoursWeatherContainer = document.createElement('div');
            nextHoursWeatherContainer.id = `${i}HoursWeatherContainer`;
            nextHoursWeatherContainer.className = 'nextHourcontainer';
            const temperature = document.createElement('span');
            temperature.id = `${i}HoursTemperature`;
            nextHoursWeatherContainer.appendChild(temperature);
            const icon = document.createElement('span');
            icon.id = `${i}hoursIcon`;
            icon.className = 'nextHoursIcon';
            nextHoursWeatherContainer.appendChild(icon);
            const rainPercentage = document.createElement('span');
            rainPercentage.id = `${i}hoursRainPercentage`;
            rainPercentage.class = 'nextHoursRainPercentage';
            nextHoursWeatherContainer.appendChild(rainPercentage);
            mainContainerFooter.appendChild(nextHoursWeatherContainer);
        }
    }
}