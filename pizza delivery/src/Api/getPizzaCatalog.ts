import axiosInstance from "./axiosInstance.ts";
import {Pizza} from "../types";

export const getPizzaCatalog = async () => {

    const response = await axiosInstance.get("/pizza/catalog");
    const data : Pizza[] =  response.data.catalog;
    return data;
}