import { Card } from '@ui/Card/Card.tsx';

import type { PizzaOrder } from '@/utils/api';

interface OrderCardProps {
  order?: PizzaOrder;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  order && <Card>{order._id}</Card>;
};
