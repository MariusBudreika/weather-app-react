import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/UI/Card";
import WeatherInfo from "./components/WeatherInfo";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    "X-RapidAPI-Key": "270bfb7964msh2c6112039d5038ap138d54jsn80cb0efa3cf0",
  },
};

function App() {
  const [country, setCountry] = useState("Lithuania");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchQueryHandler = (country) => {
    setCountry(country);
  };

  const fetchWeatherDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${country}`,
        options
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [country]);

  useEffect(() => {
    fetchWeatherDataHandler();
  }, [fetchWeatherDataHandler]);

  return (
    <div className="app">
      <Card>
        {!isLoading && (
          <>
            <Input onSearch={searchQueryHandler} />
            <WeatherInfo data={data} />
          </>
        )}
      </Card>
    </div>
  );
}

export default App;
