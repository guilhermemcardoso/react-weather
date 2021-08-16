import React, { useState } from "react";

import { ButtonContainer, Header, WeatherContainer, MainContainer, Footer } from "./styles";

import { GetLocationWeather } from "../../../domain/usecases/get-location-weather";
import { LocationWeather } from "../../../domain/models/location-weather";
import { SearchLocation } from "../../../domain/usecases/search-location";
import LocationButton from "../../components/LocationButton";
import WeatherCard from "../../components/WeatherCard";
import Loading from "../../components/Loading";

type Props = {
  getLocationWeather: GetLocationWeather;
  searchLocation: SearchLocation;
};

const Weather: React.FC<Props> = ({ getLocationWeather }) => {
  const [weathers, setWeathers] = useState<LocationWeather[]>([]);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleClick(locationId: number) {
    setLoading(true);
    const response = await getLocationWeather.get({ locationId });
    setSelectedLocation(locationId);
    setLoading(false);
    setWeathers(response);
  }

  return (
    <MainContainer>
      <Header>Weather</Header>
      <ButtonContainer>
        <LocationButton
          isSelected={selectedLocation === 742676}
          locationId={742676}
          locationName={"Lisbon"}
          onClick={handleClick}
        />
        <LocationButton
          isSelected={selectedLocation === 44418}
          locationId={44418}
          locationName={"London"}
          onClick={handleClick}
        />
        <LocationButton
          isSelected={selectedLocation === 2459115}
          locationId={2459115}
          locationName={"New York"}
          onClick={handleClick}
        />
        <LocationButton
          isSelected={selectedLocation === 455827}
          locationId={455827}
          locationName={"São Paulo"}
          onClick={handleClick}
        />
      </ButtonContainer>
      <WeatherContainer>
        {loading && <Loading />}
        {!loading && weathers.map((weather) => {
          return (
            <WeatherCard weather={weather} />
          );
        })}
      </WeatherContainer>
      <Footer>Developed by Guilherme Cardoso - thanks to www.metaweather.com</Footer>
    </MainContainer>
  );
};

export default Weather;
