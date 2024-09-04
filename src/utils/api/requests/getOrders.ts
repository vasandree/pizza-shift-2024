import type { PizzaOrdersResponse, RequestConfig } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type GetOrdersConfig = RequestConfig;

export const getOrders = async (config?: GetOrdersConfig): Promise<PizzaOrdersResponse> => {
  const response = await apiInstance.get('/pizza/orders', config?.config);
  return response.data as PizzaOrdersResponse;
};
