import {MyUrl} from "./url.ts";
import axios from "axios";
import {tokenUtils} from "../utils/tokenUtils.ts";
import {defaultToken} from "./request/chat_base_setting.ts";

interface RequestProps {
    url: string,
    method: string,
    data?: any
}

export const request = ({url, method, data}: RequestProps) => {
    console.log("Requesting", method, "to", url, "with data", data)
    return axios({
        baseURL: MyUrl.BASE_URL,
        headers: {
            'Authorization': `Bearer ${tokenUtils.getToken()}`,
            'Content-Type': 'application/json'
        },
        url: url,
        method: method,
        [shouldUseData(method) ? 'data' : 'params']: data,
        timeout: 20000
    }).then(response => {
        console.log(method, "     response.data", JSON.stringify(response.data))
        return response.data;
    }).catch(error => {
        console.error('There was an error with the request:', error);
    });
}

export const fetchStreamData = ({url, method, data}: RequestProps) => {
    return fetch(MyUrl.BASE_URL + url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${defaultToken}`
        },
        body: JSON.stringify(data)
    });

}
const shouldUseData = (method: string) => {
    return method === 'PUT' || method === 'POST' || method === 'DELETE' || method === 'PATCH';
}