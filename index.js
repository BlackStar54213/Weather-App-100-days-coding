const cityName = document.getElementById("cityname");
const citybtn = document.getElementById("citybtn");
const icon = document.getElementById("weatherimg");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const feels = document.getElementById("feels");
const humid = document.getElementById("humid");
const wind = document.getElementById("wind");
const formEl = document.querySelector("form");
const apikey = "b95b36def825b5659dfe29a258028f0a";
var numid = 0;
const dark = document.getElementById("darkbtn");
const body = document.querySelector("body");



formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityName.value;
    getWeatherData(cityValue);
})


async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if (!response.ok) {
            throw new error("Network response was not ok")
        }

        const data = await response.json()
        console.log(data);
        temp.innerHTML = `${data.main.temp}`;
        feels.innerHTML = `Feels like: ${data.main.feels_like}`;
        humid.innerHTML = `Humidity: ${data.main.humidity}%`;
        wind.innerHTML = `Wind Speed: ${data.wind.speed}m/s`;
        condition.innerHTML = `${data.weather[0].description}`;
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    } catch (error) {

    }
}




dark.addEventListener("click", () => {
    switch (numid) {
        case numid = 0:
            body.style.backgroundColor = "black";
            dark.innerHTML = "Light Mode";
            numid = 1;
            break;

        case numid = 1:
            body.style.backgroundColor = "white";
            dark.innerHTML = "Dark Mode";
            numid = 0;
            break;
    }
})