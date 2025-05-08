import React from "react";

function Forecast({ city, data }) {
  return (
    <div className="forecast-card">
      <div className="forecast-icon">{data.icon}</div>
      <h2 className="forecast-city">{city}</h2>
      <div className="forecast-info">
        <p><strong>Condition:</strong> {data.weatherDesc}</p>
        <p><strong>Temperature:</strong> {data.temp_C} °C</p>
        <p><strong>Feels Like:</strong> {data.FeelsLikeC} °C</p>
        <p><strong>Humidity:</strong> {data.humidity}%</p>
        <p><strong>Wind Speed:</strong> {data.windspeedKmph} km/h</p>
      </div>
    </div>
  );
}

export default Forecast;
