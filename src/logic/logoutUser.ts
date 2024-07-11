import { setUser, store } from '@/utils/redux';

export const logoutUser = () => {
  localStorage.removeItem('token');
  store.dispatch(setUser(null));
};
