import {Pizza} from "../../../types";
import apiInstance from "../apiInstance.ts";

export const getPizzaCatalog = async () => {

    const response = await apiInstance.get("/pizza/catalog");
    const data: Pizza[] = response.data.catalog;
    return data;
}