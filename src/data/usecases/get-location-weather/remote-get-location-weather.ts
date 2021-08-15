import { GetLocationWeather } from "../../../domain/usecases/get-location-weather";
import { LocationWeather } from "../../../domain/models/location-weather";
import { HttpGetClient } from "../../protocols/http/http-get-client";

export class RemoteGetLocationWeather implements GetLocationWeather {
    constructor(
        private readonly httpGetClient: HttpGetClient
    ) {}

    async get({
        locationId
    }: GetLocationWeather.Params): Promise<LocationWeather[]> {
        const httpResponse = await this.httpGetClient.get({
            url: `${process.env.REACT_APP_WEATHER_BASE_URL}location/${locationId}`
        });

        const data = httpResponse.data.consolidated_weather;
        const weathers: LocationWeather[] = [];

        data.forEach((weather: any) => {
            const {
                id,
                weather_state_abbr,
                applicable_date,
                min_temp,
                max_temp,
                the_temp,
                wind_speed,
                wind_direction_compass
            } = weather;

            weathers.push({
                id,
                weatherStateName: weather_state_abbr,
                applicableDate: applicable_date,
                minTemp: min_temp,
                maxTemp: max_temp,
                temp: the_temp,
                windSpeed: wind_speed,
                windDirection: wind_direction_compass
            })
        });

        return weathers;
    }
}