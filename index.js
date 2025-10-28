const cityName = document.getElementById('cityName')
const city = document.querySelector('.city')
const image = document.querySelector('.weather-icon')
const temp = document.querySelector('.temp')
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')
const check = document.getElementById('check')

let date = new Date();
let newYear = date.getFullYear()
year.innerText = newYear

const apiKey = '2f8cb4eca6e3afdbaf2c333a3eb090aa';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(place) {
    const response = await fetch(apiUrl + place + `&appid=${apiKey}`);
    let data = await response.json()
    city.innerHTML = data.name
    temp.innerHTML = Math.round(data.main.temp) + "°c   "
    wind.innerHTML = data.wind.speed + "Km"
    humidity.innerHTML = `${data.main.humidity}%`
    image.src = "images/" + (data.weather[0].main).toLowerCase() + ".png"

}
check.addEventListener('click', () => {
    checkWeather(cityName.value)
})
cityName.addEventListener('keypress', (evt) => {
    if (evt.key == 'Enter') {
        checkWeather(cityName.value)
    };

})