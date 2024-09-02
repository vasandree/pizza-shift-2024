import type { PizzasResponse, RequestConfig } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type GetPizzaCatalogConfig = RequestConfig;

export const getPizzaCatalog = async (config?: GetPizzaCatalogConfig): PizzasResponse => {
  const response = await apiInstance.get('/pizza/catalog', config?.config);
  return response.data as PizzasResponse;
};
