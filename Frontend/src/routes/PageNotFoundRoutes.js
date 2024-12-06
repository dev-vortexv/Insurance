import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option  routing
const PageNotFound = Loadable(lazy(() => import('views/NotFound')));

// ==============================|| NOTFOUND ROUTING ||============================== //

const PageNotFoundRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '*',
      element: <PageNotFound />
    }
  ]
};

export default PageNotFoundRoutes;
