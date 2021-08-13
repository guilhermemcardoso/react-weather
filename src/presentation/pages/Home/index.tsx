import React, { useState, useEffect } from "react";
import { GetLocationWeather } from "../../../domain/usecases/get-location-weather";
import { LocationWeather } from "../../../domain/models/location-weather";
import { SearchLocation } from "../../../domain/usecases/search-location";

type Props = {
  getLocationWeather: GetLocationWeather;
  searchLocation: SearchLocation
};

const Weather: React.FC<Props> = ({ getLocationWeather }) => {
  const [weathers, setWeathers] = useState<LocationWeather[]>([]);

  useEffect(() => {}, []);

  async function handleClick(locationId: number) {
    const response = await getLocationWeather.get({ locationId });
    setWeathers(response);
  }

  return (
    <div>
      <h2>Weather</h2>
      <div>
        <button onClick={() => handleClick(742676)}>Lisboa</button>
        <button onClick={() => handleClick(44418)}>Londres</button>
        <button onClick={() => handleClick(2459115)}>Nova Iorque</button>
        <button onClick={() => handleClick(455827)}>Sao Paulo</button>
      </div>
      {weathers.map((weather) => {
        return (
          <div key={weather.id}>
            <small>{weather.applicableDate}</small>
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
