import React, { useState, useEffect } from "react";
import { Button } from "@weather/elements.button";
import { Textbox } from "@weather/elements.textbox";

export const Weather = ({ children, ...rest }) => {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=08e3ad0437282f0abefa56ee74ab56af`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const info = `The temperature is ${data.main.temp}˚C and humidity is ${data.main.humidity}% and ${data.weather[0].description}`
        setResult(info)
        setLocation("");
      })
      .catch(function (error) {
        console.log("Error in fetching weather data");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textbox type="text" value={location} onChange={(e) => setLocation(e.target.value)}>
        Location
      </Textbox>
      <Button type="submit">Search</Button>
      <hr/>
      <div>
        {result}
      </div>
    </form>
  );
};
