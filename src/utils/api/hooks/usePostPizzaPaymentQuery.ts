import type { PostPizzaPaymentConfig } from '@api/requests/postPizzaPayment.ts';
import { postPizzaPayment } from '@api/requests/postPizzaPayment.ts';
import { useMutation } from '@tanstack/react-query';

export const usePostPizzaPaymentQuery = () =>
  useMutation({
    mutationFn: (params: PostPizzaPaymentConfig) => postPizzaPayment(params)
  });
