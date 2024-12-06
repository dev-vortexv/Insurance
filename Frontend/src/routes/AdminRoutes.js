import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// login option  routing
const DashboardDetails = Loadable(lazy(() => import('adminPages/Dashboard')));
const UsersDetails = Loadable(lazy(() => import('adminPages/UsersDetails')));
const PackagesDetails = Loadable(lazy(() => import('adminPages/Packages')));
const PaymentsDetails = Loadable(lazy(() => import('adminPages/PaymentsDetails')));

// ==============================|| ADMIN ROUTING ||============================== //

const AdminRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'adminDashboard',
      children: [
        {
          path: 'home',
          element: <DashboardDetails />
        }
      ]
    },
    {
      path: 'adminDashboard',
      children: [
        {
          path: 'userDetails',
          element: <UsersDetails />
        }
      ]
    },
    {
      path: 'adminDashboard',
      children: [
        {
          path: 'packages',
          element: <PackagesDetails />
        }
      ]
    },
    {
      path: 'adminDashboard',
      children: [
        {
          path: 'paymentsDetails',
          element: <PaymentsDetails />
        }
      ]
    }
  ]
};

export default AdminRoutes;
