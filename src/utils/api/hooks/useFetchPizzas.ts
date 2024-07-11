import { useQuery } from '@tanstack/react-query';
import { getPizzaCatalog } from '@/utils/api';

export const useFetchPizzas = () =>
  useQuery({
    queryFn: () => getPizzaCatalog(),
    queryKey: ['pizzas'],
    select: (data) => data.catalog
  });
