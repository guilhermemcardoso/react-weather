import { Location } from "../models/location";

export interface SearchLocation {
    get(params: SearchLocation.Params): Promise<Location[]>;
}

export namespace SearchLocation {
    export type Params = {
        query: string;
    };
}