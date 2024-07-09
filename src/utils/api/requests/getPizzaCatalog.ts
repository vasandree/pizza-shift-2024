import { apiInstance, PizzasResponse, RequestConfig } from '@/utils/api';

export type GetPizzaCatalogConfig = RequestConfig;

export const getPizzaCatalog = async (config: GetPizzaCatalogConfig) => {
  const response = await apiInstance.get<PizzasResponse>('/pizza/catalog', config?.config);
  return response.data;
};
