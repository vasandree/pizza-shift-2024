import type { GetOrderConfig } from '@api/requests/getOrder.ts';
import { getOrder } from '@api/requests/getOrder.ts';
import { useQuery } from '@tanstack/react-query';

export const useFetchOrderQuery = ({ params, config }: GetOrderConfig) => {
  return useQuery({
    queryFn: () => getOrder({ params, config }),
    queryKey: ['order', params],
    select: (data) => data.order
  });
};
