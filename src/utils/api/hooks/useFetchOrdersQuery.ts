import { useQuery } from '@tanstack/react-query';

import type { GetOrdersConfig } from '@/utils/api';
import { getOrders } from '@/utils/api';

export const useFetchOrdersQuery = (config: GetOrdersConfig) =>
  useQuery({
    queryFn: () => getOrders(config),
    queryKey: ['orders'],
    select: (data) => data.orders
  });
