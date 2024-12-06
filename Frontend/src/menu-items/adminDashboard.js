// assets
import {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers
} from '@tabler/icons';

// constant
const icons = {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers
};

// ==============================|| ADMIN DASHBOARD MENU ITEMS ||============================== //

const adminDashboard = {
  title: 'Admin-Dashboard',
  type: 'admin',
  children: [
    {
      id: '01',
      title: 'Dashboard',
      type: 'item',
      url: '/adminDashboard/home',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: '02',
      title: 'Users Details',
      type: 'item',
      url: '/adminDashboard/userDetails',
      icon: icons.IconAntennaBars5,
      breadcrumbs: false
    },
    {
      id: '03',
      title: 'Packages',
      type: 'item',
      url: '/adminDashboard/packages',
      icon: icons.IconChecklist,
      breadcrumbs: false
    },
    {
      id: '04',
      title: 'Payment Details',
      type: 'item',
      url: '//adminDashboard/paymentsDetails',
      icon: icons.IconNotebook,
      breadcrumbs: false
    }
  ]
};

export default adminDashboard;
