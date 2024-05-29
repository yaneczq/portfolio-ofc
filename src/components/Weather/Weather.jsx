import { useState, useEffect } from "react";
import DisplayDate from "./DisplayDate";


const Weather = () => {
  const apiKey = "6a99ac672d954bcac92a244150fda6a9";
  const [city,] = useState("Jasło");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("No weather found.");
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSearch = () => {
  //   fetchWeather(city);
  // add setCity
  // };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="weather">
      {/* <div className="search">
        <input
          type="text"
          className="search-bar"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>Click</button>
      </div> */}

      {loading ? (
        <div>Loading...</div>
      ) : (
        weatherData && (
          <div className="content">
            <div className="location-date">
              <h2 className="city">{weatherData.name}</h2>
              <DisplayDate></DisplayDate>
            </div>
            {/* <img
              className="icon"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            /> */}
            
            <p className="temp">{weatherData.main.temp}°C</p>
            <div className="data">
              <p className="description">{weatherData.weather[0].description}</p>
              <div className="specs">
                <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
                <p className="wind">Wind speed: {weatherData.wind.speed} km/h</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
