import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages';
import { routes } from '@/utils/consts';

import { Layout } from './Layout.tsx';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routes.root(),
        element: <MainPage />
      }
    ]
  }
]);
