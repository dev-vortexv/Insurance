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
  IconUsers,
  IconMoneybag,
  IconUser
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
  IconUsers,
  IconMoneybag,
  IconUser
};

// ==============================|| USERS DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  title: 'Dashboard-Menu',
  type: 'user',
  children: [
    {
      id: '00',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/app',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: '01',
      title: 'Lead Management',
      type: 'item',
      url: '/dashboard/lead',
      icon: icons.IconAntennaBars5,
      breadcrumbs: false
    },
    {
      id: '02',
      title: 'Contact Management',
      type: 'item',
      url: '/dashboard/contact',
      icon: icons.IconPhoneCheck,
      breadcrumbs: false
    },
    {
      id: '03',
      title: 'Policy Management',
      type: 'item',
      url: '/dashboard/policy',
      icon: icons.IconNotebook,
      breadcrumbs: false
    },
    {
      id: '04',
      title: 'Tasks',
      type: 'item',
      url: '/dashboard/task',
      icon: icons.IconChecklist,
      breadcrumbs: false
    },
    {
      id: '05',
      title: 'Meeting',
      type: 'item',
      url: '/dashboard/meeting',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: '06',
      title: 'Calls',
      type: 'item',
      url: '/dashboard/call',
      icon: icons.IconPhoneCall,
      breadcrumbs: false
    },
    {
      id: '07',
      title: 'Emails',
      type: 'item',
      url: '/dashboard/email',
      icon: icons.IconMail,
      breadcrumbs: false
    },
    {
      id: '08',
      title: 'Calender',
      type: 'item',
      url: '/dashboard/calender',
      icon: icons.IconCalendarEvent,
      breadcrumbs: false
    },
    {
      id: '09',
      title: 'Document Management',
      type: 'item',
      url: '/dashboard/document',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: '10',
      title: 'Email Template',
      type: 'item',
      url: '/dashboard/emailtemplate',
      icon: icons.IconFileInvoice,
      breadcrumbs: false
    },
    {
      id: '11',
      title: 'Subscription',
      type: 'item',
      url: '/dashboard/subscription',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: '12',
      title: 'Payment Details',
      type: 'item',
      url: '/dashboard/paymentDetails',
      icon: icons.IconMoneybag,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
