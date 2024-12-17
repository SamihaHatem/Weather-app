let home_link = document.getElementById("home_link")
let news_link = document.getElementById("news_link")
let liveCameras_link = document.getElementById("liveCameras_link")
let photos_link = document.getElementById("photos_link")
let content_link = document.getElementById("content_link")
let cityInput = document.getElementById("cityInput")
let my_weather = document.getElementById("my_weather")

home_link.addEventListener('click', () => {
    home_link.classList.add('selected')
    news_link.classList.remove('selected')
    liveCameras_link.classList.remove('selected')
    photos_link.classList.remove('selected')
    content_link.classList.remove('selected')
})

news_link.addEventListener('click', () => {
    news_link.classList.add('selected')
    home_link.classList.remove('selected')
    liveCameras_link.classList.remove('selected')
    photos_link.classList.remove('selected')
    content_link.classList.remove('selected')
})

liveCameras_link.addEventListener('click', () => {
    liveCameras_link.classList.add('selected')
    news_link.classList.remove('selected')
    home_link.classList.remove('selected')
    photos_link.classList.remove('selected')
    content_link.classList.remove('selected')
})

photos_link.addEventListener('click', () => {
    photos_link.classList.add('selected')
    news_link.classList.remove('selected')
    liveCameras_link.classList.remove('selected')
    home_link.classList.remove('selected')
    content_link.classList.remove('selected')
})

content_link.addEventListener('click', () => {
    content_link.classList.add('selected')
    news_link.classList.remove('selected')
    liveCameras_link.classList.remove('selected')
    photos_link.classList.remove('selected')
    home_link.classList.remove('selected')
})

// apiKey :  4b6ea866efc34bc68d8141839241712
// baseUrl : http://api.weatherapi.com/v1
// http://api.weatherapi.com/v1/search.json?key=4b6ea866efc34bc68d8141839241712&q=lond
// `http://api.weatherapi.com/v1/search.json?key=4b6ea866efc34bc68d8141839241712&q=${cityInput}`
// `https://api.weatherapi.com/v1/forecast.json?key=4b6ea866efc34bc68d8141839241712&q=${cityInput}&days=3`

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let locationName = ''

async function getData() {
    locationName = ''
    my_weather.innerHTML = ''
    let city = (cityInput.value) ? cityInput.value : 'cairo'
    const url = `https://api.weatherapi.com/v1/forecast.json?key=4b6ea866efc34bc68d8141839241712&q=${city}&days=3`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        locationName = json.location.name

        // forecast.forecastday[0].date
        let date1 = new Date(json.forecast.forecastday[0].date)
        let date2 = new Date(json.forecast.forecastday[1].date)
        let date3 = new Date(json.forecast.forecastday[2].date)

        my_weather.innerHTML = `
         <div class="w-80 mx-auto row">
                    <!-- Card 1 -->
                    <div class="custom-card col-md-4 col-sm-12 bg-dark p-0">
                        <div class="header p-2 d-flex justify-content-between">
                            <p class="text-white m-0">${weekday[date1.getDay()]}</p>
                            <p class="text-white m-0">${date1.getDay()} ${month[date1.getMonth()]}</p>
                        </div>

                        <div class="body p-3">
                            <p class="text-secondary fw-bold">${locationName}</p>
                            <p class="h1 custom-h1 text-white">${json.current.temp_c}oC</p>
                            <img src="https:${json.current?.condition?.icon}" alt="clouds">

                            <p class="text-blue">${json.current?.condition?.text}</p>

                            <div class="row">
                                <div class="col-4">
                                    <i class="fa-solid fa-umbrella text-secondary"></i>
                                    <span class="text-secondary">${json.current?.windchill_c}%</span>
                                </div>
                                <div class="col-4">
                                    <i class="fa-solid fa-wind text-secondary"></i>
                                    <span class="text-secondary">${json.current.wind_kph}km/h</span>
                                </div>
                                <div class="col-4">
                                    <i class="fa-regular fa-compass text-secondary"></i>
                                    <span class="text-secondary">${json.current.wind_dir}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="col-md-4 col-sm-12 bg-darker p-0">
                        <div class="header p-2 d-flex justify-content-between">
                            <p class="text-white text-center mx-auto my-0">${weekday[date2.getDay()]}</p>
                        </div>

                        <div class="body p-3">
                            <div class="text-center">
                                <img src="https:${json.forecast.forecastday[1].day.condition.icon}" alt="clouds">
                            </div>
                            <p class="h1 text-white text-center">${json.forecast.forecastday[1].day.maxtemp_c}oC</p>
                            <p class="h3 text-white text-center">${json.forecast.forecastday[1].day.mintemp_c}o</p>

                            <p class="text-blue">${json.forecast.forecastday[1].day.condition.text}</p>
                        </div>

                        <div class="col-md-4 col-sm-12 bg-dark">

                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="custom-card col-md-4 col-sm-12 bg-dark p-0">
                        <div class="header p-2 d-flex justify-content-between">
                            <p class="text-white text-center mx-auto my-0">${weekday[date3.getDay()]}</p>
                        </div>

                        <div class="body p-3">
                            <div class="text-center">
                                <img src="https:${json.forecast.forecastday[2].day.condition.icon}" alt="clouds">
                            </div>
                            <p class="h1 text-white text-center">${json.forecast.forecastday[2].day.maxtemp_c}oC</p>
                            <p class="h3 text-white text-center">${json.forecast.forecastday[2].day.mintemp_c}o</p>

                            <p class="text-blue">${json.forecast.forecastday[2].day.condition.text}</p>
                        </div>

                        <div class="col-md-4 col-sm-12 bg-dark">

                        </div>
                    </div>
                </div>`

                maxtemp_c
                mintemp_c

        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

getData()
