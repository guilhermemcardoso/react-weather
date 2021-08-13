import axios, { AxiosResponse } from 'axios';
import { HttpGetClient } from '../../data/protocols/http/http-get-client';

export class HttpClient implements HttpGetClient {
    async get(params: HttpGetClient.Params): Promise<any> {
        let axiosResponse: AxiosResponse;

        try {
            axiosResponse = await axios.get(params.url);
        } catch(error) {
            axiosResponse = error.response;
        }

        return axiosResponse;
    }
}