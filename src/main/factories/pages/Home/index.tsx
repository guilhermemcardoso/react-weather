import React from "react";
import Home from "../../../../presentation/pages/Home";
import { RemoteGetLocationWeather } from "../../../../data/usecases/get-location-weather/remote-get-location-weather";
import { RemoteSearchLocation } from "../../../../data/usecases/search-location/remote-search-location";
import { HttpClient } from "../../../../infra/http/http-client";

export const HomeFactory = () => {
    const httpClient = new HttpClient();
    const remoteGetLocationWeather = new RemoteGetLocationWeather(
        httpClient
    );

    const remoteSearchLocation = new RemoteSearchLocation(
        httpClient
    );

    return <Home searchLocation={remoteSearchLocation} getLocationWeather={remoteGetLocationWeather} />;
};