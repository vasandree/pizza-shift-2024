export const routes = {
  root: () => '/',
  orders: () => '/orders',
  profile: () => '/profile',
  cart: () => '/cart',
  order: (orderId?: string) => `/orders/${orderId || ':orderId'}`
};
