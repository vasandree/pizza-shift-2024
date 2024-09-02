import { createBrowserRouter, Outlet } from 'react-router-dom';

import { ProtectedRoute } from '@/app/ProtectedRoute.tsx';
import { CartPage, MainPage, ProfilePage } from '@/pages';
import { routes } from '@/utils/consts';

import { Layout } from './Layout.tsx';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: (
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: routes.profile(),
            element: <ProfilePage />
          }
        ]
      },
      {
        path: routes.root(),
        element: <MainPage />
      },
      {
        path: routes.cart(),
        element: <CartPage />
      }
    ]
  }
]);
