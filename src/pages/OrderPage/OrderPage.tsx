import { OrderCard } from '@/components/systemComponents';
import type { PizzaOrder } from '@/utils/api';

interface OrderPageProps {
  order?: PizzaOrder;
}

export const OrderPage = ({ order }: OrderPageProps) => <OrderCard order={order} />;
