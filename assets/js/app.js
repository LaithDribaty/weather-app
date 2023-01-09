let todayWeather;

// function to handle click event on week days to change the content
const changeHoursContent = (day) => {
  const HourContainer = document.getElementById('hours-container');
  HourContainer.innerHTML = "";
  for (let index = 0; index < 24; index++) {
    const todayHours = todayWeather.days[day].hours[index];
    HourContainer.innerHTML += hourRowComponent(todayHours.datetime, todayHours.icon, todayHours.feelslike) ;
  }
}

// function to render html code for each hour in a day
const hourRowComponent = (time, icon, temp) => {
  return `
    <tr> 
        <td> ${time} </td>
        
        <td> 
          <embed src="assets/icons/${icon}.svg" width="30" height="30"/>
        </td>

        <td> ${temp} </td>
        <td> .. </td>
    </tr>
  `;
}

// to be rendered when fetching data
const dayComponent = (temp, icon, day, index) => {
  return `
    <div class="col-2 text-center p-4">
      <div class="border border-dark hand-hover" onclick="changeHoursContent(${index})">
        <div>
          <b>
            ${ days[ day ] }
          </b>
        </div>
        <div>
          ${temp}
        </div>
        <div>
          <embed src="assets/icons/${icon}.svg" width="60" height="60"/>
        </div>
      </div>
    </div>
  `;
}

// the api key should be stored in the system vars to avoid the risk if a code leak happened
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lattakia%2C%20syria?unitGroup=metric&key=2U4K2H5ANGUSJFPBAQ5YTXRB9&contentType=json", {
    "method": "GET",
})
.then(response => {
    response.json().then( data => {
        console.log(data);
        todayWeather = data;

        document.getElementById('stats-container').innerHTML =  `<embed src="assets/icons/${todayWeather.days[0].icon}.svg" width="150" height="150"/>`;

        document.getElementById('stats-container').innerHTML += `<b>${todayWeather.days[0].feelslike}</b>`;
        document.getElementById('wind-container').innerHTML += todayWeather.days[0].windspeed;
        
        
        document.getElementById('low-deg-container').innerHTML = todayWeather.days[0].feelslikemin;
        document.getElementById('high-deg-container').innerHTML = todayWeather.days[0].feelslikemax;
      
        const dayContainer = document.getElementById('days-container');
        for (let index = 0; index < 6; index++) {
          const today = todayWeather.days[index+1];
          dayContainer.innerHTML += dayComponent(today.feelslike, today.icon, (new Date(today.datetime)).getDay(), index) ;
        }

        const HourContainer = document.getElementById('hours-container');
        for (let index = 0; index < 24; index++) {
          const todayHours = todayWeather.days[1].hours[index];
          HourContainer.innerHTML += hourRowComponent(todayHours.datetime, todayHours.icon, todayHours.feelslike) ;
        }
    });
})
.catch(err => {
  console.error(err);
});
