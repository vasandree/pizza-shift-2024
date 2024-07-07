import { useFetch, FetchResult } from './useFetch.ts';
import { Pizza } from '../types';
import {getPizzaCatalog} from "../api";

export const useFetchPizzas = (): FetchResult<Pizza[]> => {
    return useFetch(getPizzaCatalog);
};
