import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const LeadManagement = Loadable(lazy(() => import('views/Lead')));
const ContactManagement = Loadable(lazy(() => import('views/Contact')));
const Call = Loadable(lazy(() => import('views/Calls')));
const Policy = Loadable(lazy(() => import('views/Policy')));
const Metting = Loadable(lazy(() => import('views/Metting')));
const Email = Loadable(lazy(() => import('views/Email')));
const Task = Loadable(lazy(() => import('views/Task')));
const EmailTemplates = Loadable(lazy(() => import('views/EmailTemplates')));
const Document = Loadable(lazy(() => import('views/Documents')));
const Calender = Loadable(lazy(() => import('views/Calender')));
const AddTemplates = Loadable(lazy(() => import('views/EmailTemplates/AddTemplates')));
const OverviewLeadDetail = Loadable(lazy(() => import('views/Lead/OverView')));
const OverviewContactDetail = Loadable(lazy(() => import('views/Contact/OverView')));
const OverviewPolicyDetail = Loadable(lazy(() => import('views/Policy/OverView')));
const OverviewTaskDetail = Loadable(lazy(() => import('views/Task/OverView')));
const OverviewMeetingDetail = Loadable(lazy(() => import('views/Metting/OverView')));
const OverviewCallsDetail = Loadable(lazy(() => import('views/Calls/OverView')));
const OverviewEmailTemplatesDetail = Loadable(lazy(() => import('views/EmailTemplates/EditTemplates')));
const PaymentDetails = Loadable(lazy(() => import('views/PaymentsDetails')));
const SubscriptionDetails = Loadable(lazy(() => import('views/Subscription')));
const ProfileDetails = Loadable(lazy(() => import('layout/MainLayout/Header/ProfileSection/ProfileDetails')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      children: [
        {
          path: 'app',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'lead',
          element: <LeadManagement />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'contact',
          element: <ContactManagement />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'call',
          element: <Call />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'policy',
          element: <Policy />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'policy',
          element: <Policy />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'task',
          element: <Task />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'email',
          element: <Email />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'meeting',
          element: <Metting />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'calender',
          element: <Calender />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'document',
          element: <Document />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'emailtemplate',
          element: <EmailTemplates />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'emailtemplate/addTemplates',
          element: <AddTemplates />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'lead/view/:id',
          element: <OverviewLeadDetail />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'Contact/view/:id',
          element: <OverviewContactDetail />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'policy/view/:id',
          element: <OverviewPolicyDetail />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'task/view/:id',
          element: <OverviewTaskDetail />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'meeting/view/:id',
          element: <OverviewMeetingDetail />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'calls/view/:id',
          element: <OverviewCallsDetail />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'emailtemplate/view/:id',
          element: <OverviewEmailTemplatesDetail />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'profileDetails',
          element: <ProfileDetails />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'paymentDetails',
          element: <PaymentDetails />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'subscription',
          element: <SubscriptionDetails />
        }
      ]
    }
  ]
};

export default MainRoutes;
