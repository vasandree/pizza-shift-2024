import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { GetUserSessionConfig } from '@api/requests/getUserSession.ts';

import { Loader } from '@/components/uiKit';
import { NotAuthPage } from '@/pages';
import type { AppDispatch, RootState } from '@/utils/redux';
import { fetchUserSession } from '@/utils/redux';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { value: user, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user) {
      const config: GetUserSessionConfig = {};
      dispatch(fetchUserSession(config));
    }
  }, [dispatch, user]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <NotAuthPage />;
  }

  return <>{user && children}</>;
};
