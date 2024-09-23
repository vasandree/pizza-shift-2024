import { removeToken } from '@/utils/helpers';
import { setUser, store } from '@/utils/redux';

export const logoutUser = () => {
  removeToken();
  store.dispatch(setUser(null));
};
