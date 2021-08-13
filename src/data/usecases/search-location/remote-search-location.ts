import { SearchLocation } from "../../../domain/usecases/search-location";
import { Location } from "../../../domain/models/location";
import { HttpGetClient } from "../../protocols/http/http-get-client";

export class RemoteSearchLocation implements SearchLocation {
    constructor(
        private readonly httpGetClient: HttpGetClient
    ) {}

    async search({
        query
    }: SearchLocation.Params): Promise<Location[]> {
        const httpResponse = await this.httpGetClient.get({
            url: `https://meta-weather.herokuapp.com/location/?query=${query}`
        });

        const data = httpResponse.data.consolidated_weather;
        const locations: Location[] = [];

        data.forEach((location: any) => {
            const {
                woeid,
                latt_long,
                location_type,
                title
            } = location;

            locations.push({
                woeid,
                latLong: latt_long,
                locationType: location_type,
                title
            })
        });

        return locations;
    }
}