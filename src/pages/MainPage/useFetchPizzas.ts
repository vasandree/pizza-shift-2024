import { FetchResult, useFetch } from '@/utils/hooks';
import { getPizzaCatalog, type Pizza } from '@/utils/api';

export const useFetchPizzas = (): FetchResult<Pizza[]> => {
  const result = useFetch(getPizzaCatalog);

  if (result.data) {
    return {
      ...result,
      data: result.data.catalog
    };
  }

  return result as FetchResult<Pizza[]>;
};
