import React from "react";
import { LocationWeather } from "../../../domain/models/location-weather";

import {
  WeatherCardContainer,
  DateContainer,
  IconContainer,
  Icon,
  TempContainer,
  TwoItemContainer,
  TwoItem,
  Label,
} from "./styles";

import { formatTemp, getDayOfWeekFromDate } from "../../utils/formatter";

type Props = {
  weather: LocationWeather;
};

const WeatherCard: React.FC<Props> = ({ weather }) => {
  return (
    <WeatherCardContainer key={weather.id}>
      <DateContainer>
        {getDayOfWeekFromDate(weather.applicableDate)}
      </DateContainer>
      <IconContainer>
        <Icon
          src={`https://www.metaweather.com/static/img/weather/png/64/${weather.weatherStateName}.png`}
        />
      </IconContainer>
      <TempContainer>{formatTemp(weather.temp)}º</TempContainer>
      <TwoItemContainer>
        <TwoItem>
          <Label>min</Label>
          {formatTemp(weather.minTemp)}º
        </TwoItem>
        <TwoItem>
          <Label>max</Label>
          {formatTemp(weather.maxTemp)}º
        </TwoItem>
      </TwoItemContainer>
      <TwoItemContainer>
        <TwoItem>
          <Label>wind speed</Label>
          {formatTemp(weather.windSpeed)}
        </TwoItem>
        <TwoItem>
          <Label>wind dir</Label>
          {weather.windDirection}
        </TwoItem>
      </TwoItemContainer>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
