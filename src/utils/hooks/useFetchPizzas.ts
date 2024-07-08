import { getPizzaCatalog } from '../api';
import type { Pizza } from '../types';

import type { FetchResult } from './useFetch.ts';
import { useFetch } from './useFetch.ts';

export const useFetchPizzas = (): FetchResult<Pizza[]> => {
  return useFetch(getPizzaCatalog);
};
