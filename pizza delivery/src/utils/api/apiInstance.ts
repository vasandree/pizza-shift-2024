import axios from "axios";
import {BASE_URL} from "../consts";

const apiInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


apiInstance.interceptors.response.use(
    (response) => {
        if (response.data.success) {
            console.log(response.data);
        } else {
            console.log(response);
        }
        return response
    },
    (error) => {
        console.error(error)
        return Promise.reject(error);
    })


export default apiInstance;