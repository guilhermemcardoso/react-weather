import { Location } from "../models/location";

export interface SearchLocation {
    search(params: SearchLocation.Params): Promise<Location[]>;
}

export namespace SearchLocation {
    export type Params = {
        query: string;
    };
}