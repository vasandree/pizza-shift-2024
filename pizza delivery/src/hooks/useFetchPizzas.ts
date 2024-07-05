import { useFetch, FetchResult } from './useFetch';
import { getPizzaCatalog } from '../Api';
import { Pizza } from '../types';

export const useFetchPizzas = (): FetchResult<Pizza[]> => {
    return useFetch(getPizzaCatalog);
};
