let todayWeather;

// the api key should be stored in the system vars to avoid the risk if a code leak happened
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lattakia%2C%20syria?unitGroup=metric&key=2U4K2H5ANGUSJFPBAQ5YTXRB9&contentType=json", {
    "method": "GET",
})
.then(response => {
    response.json().then( data => {
        console.log(data);
        todayWeather = data;

        document.getElementById('stats-container').innerHTML =  todayWeather.days[0].icon;
        
        document.getElementById('stats-container').innerHTML += todayWeather.days[0].feelslike;
        document.getElementById('wind-container').innerHTML += todayWeather.days[0].windspeed;
        
        
        document.getElementById('low-deg-container').innerHTML = todayWeather.days[0].feelslikemin;
        document.getElementById('high-deg-container').innerHTML = todayWeather.days[0].feelslikemax;
    });
})
.catch(err => {
  console.error(err);
});
