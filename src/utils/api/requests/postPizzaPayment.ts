import type { CreatePizzaPaymentDto, RequestConfig } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type PostPizzaPaymentConfig = RequestConfig<CreatePizzaPaymentDto>;

export const postPizzaPayment = async ({ params, config }: PostPizzaPaymentConfig) => {
  const response = await apiInstance.post('/pizza/payment', params, config);
  return response.data;
};
