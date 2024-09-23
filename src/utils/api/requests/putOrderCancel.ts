import type { CancelPizzaOrderResponse, RequestConfig } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type PutOrderCancelConfig = RequestConfig;

export const putOrderCancel = async (config?: PutOrderCancelConfig) => {
  const response = await apiInstance.put<CancelPizzaOrderResponse>('pizza/orders/cancel', config);
  return response.data;
};
