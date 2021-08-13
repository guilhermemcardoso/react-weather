import { LocationWeather } from "../models/location-weather";

export interface GetLocationWeather {
    get(params: GetLocationWeather.Params): Promise<LocationWeather[]>;
}

export namespace GetLocationWeather {
    export type Params = {
        locationId: number;
    };
}