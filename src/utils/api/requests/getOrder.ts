import type { PizzaOrderResponse, RequestConfig } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type GetOrderConfig = RequestConfig<string>;

export const getOrder = async ({ params, config }: GetOrderConfig): Promise<PizzaOrderResponse> => {
  const response = await apiInstance.get(`/pizza/orders${params ? `/${params}` : ''}`, config);
  return response.data as PizzaOrderResponse;
};
