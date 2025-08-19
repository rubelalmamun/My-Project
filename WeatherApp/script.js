const apiKey = "da18a3528380cba2d40ea608722ac728";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function getWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await response.json();
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    weather.style.display = "block";
    error.style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  getWeather(searchInput.value);
});
