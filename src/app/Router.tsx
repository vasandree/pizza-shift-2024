import { createBrowserRouter, Outlet } from 'react-router-dom';

import { ProtectedRoute } from '@/app/ProtectedRoute.tsx';
import { MainPage } from '@/pages';
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
            element: <MainPage />
          }
        ]
      },
      {
        path: routes.root(),
        element: <MainPage />
      }
    ]
  }
]);
