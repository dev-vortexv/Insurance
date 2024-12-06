import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option  routing
const AuthLoginPage = Loadable(lazy(() => import('views/pages/authentication/authenticationPage/Login')));
const AuthRegisterPage = Loadable(lazy(() => import('views/pages/authentication/authenticationPage/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/dashboard/login',
      element: <AuthLoginPage />
    },
    {
      path: '/dashboard/register',
      element: <AuthRegisterPage />
    }
  ]
};

export default AuthenticationRoutes;
