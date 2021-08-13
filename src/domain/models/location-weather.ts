export type LocationWeather = {
    id: number;
    weatherStateName: string;
    applicableDate: Date;
    temp: number;
    maxTemp: number;
    minTemp: number;
    windSpeed: number;
    windDirection: string;
}