import React, { useState } from "react";
import Forecast from "./Forecast";

const fakeWeatherDB = {
  Johannesburg: {
    temp_C: "25",
    FeelsLikeC: "24",
    weatherDesc: "Sunny",
    humidity: "35",
    windspeedKmph: "10",
    icon: "☀️"
  },
  CapeTown: {
    temp_C: "18",
    FeelsLikeC: "17",
    weatherDesc: "Cloudy",
    humidity: "60",
    windspeedKmph: "20",
    icon: "☁️"
  },
  Durban: {
    temp_C: "28",
    FeelsLikeC: "30",
    weatherDesc: "Thunderstorm",
    humidity: "75",
    windspeedKmph: "25",
    icon: "⛈️"
  },
  Pretoria: {
    temp_C: "27",
    FeelsLikeC: "28",
    weatherDesc: "Partly Cloudy",
    humidity: "50",
    windspeedKmph: "15",
    icon: "⛅"
  },
  Bloemfontein: {
    temp_C: "20",
    FeelsLikeC: "19",
    weatherDesc: "Windy",
    humidity: "40",
    windspeedKmph: "35",
    icon: "🌬️"
  }
};

const defaultCities = Object.keys(fakeWeatherDB);

function App() {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSearch = () => {
    const cleanCity = city.trim();
    if (!cleanCity || !fakeWeatherDB[cleanCity]) {
      alert("Please enter a valid South African city from the list.");
      return;
    }
    setSelectedCity(cleanCity);
  };

  const handleDefaultCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="app">
      <h1>🌍 South Africa Weather App</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Type a city (e.g. Durban)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="city-list">
        <h3>Popular Cities:</h3>
        {defaultCities.map((cityName) => (
          <button
            key={cityName}
            className="city-button"
            onClick={() => handleDefaultCityClick(cityName)}
          >
            {cityName}
          </button>
        ))}
      </div>

      {selectedCity && (
        <Forecast city={selectedCity} data={fakeWeatherDB[selectedCity]} />
      )}
    </div>
  );
}

export default App;
