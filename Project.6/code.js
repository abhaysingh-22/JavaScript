const weatherApiKey = "e42dea5da1msh06b35d13df22ce0p1a4ac0jsnb75afd4f7691";
const airQualityApiKey = "e42dea5da1msh06b35d13df22ce0p1a4ac0jsnb75afd4f7691";

// Weather API Call
async function fetchWeather(city) {
  const weatherUrl = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;

  try {
    const response = await fetch(weatherUrl, {
      headers: {
        "x-rapidapi-key": weatherApiKey,
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    document.getElementById("weather-info").innerHTML = `
      <li>Location: ${data.location.city}</li>
      <li>Temperature: ${data.current_observation.condition.temperature}°F</li>
      <li>Condition: ${data.current_observation.condition.text}</li>
      <li>Humidity: ${data.current_observation.atmosphere.humidity}%</li>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("weather-info").innerHTML =
      "<li>Error fetching weather data</li>";
  }
}

// Air Quality API Call
async function fetchAirQuality(city) {
  const airQualityUrl = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;

  try {
    const response = await fetch(airQualityUrl, {
      headers: {
        "x-rapidapi-key": airQualityApiKey,
        "x-rapidapi-host": "air-quality-by-api-ninjas.p.rapidapi.com",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch air quality data");

    const data = await response.json();
    document.getElementById("air-quality-info").innerHTML = `
      <li>CO: ${data.CO.concentration || "--"}</li>
      <li>NO2: ${data.NO2.concentration || "--"}</li>
      <li>PM2.5: ${data.PM2_5.concentration || "--"}</li>
      <li>PM10: ${data.PM10.concentration || "--"}</li>
      <li>Overall AQI: ${data.overall_aqi || "--"}</li>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("air-quality-info").innerHTML =
      "<li>Error fetching air quality data</li>";
  }
}

// Handle Search
document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeather(city);
    fetchAirQuality(city);
  } else {
    alert("Please enter a city name.");
  }
});
