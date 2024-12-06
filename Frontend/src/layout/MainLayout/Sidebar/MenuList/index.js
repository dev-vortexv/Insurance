// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //
const MenuList = () => {
  const user = localStorage.getItem('userRole');

  const navItems = menuItem.items.map((item, index) => {
    switch (item.type) {
      case 'user':
        return <NavGroup key={index} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            User Menu Items Error
          </Typography>
        );
    }
  });
  const adminItems = menuItem.adminItems.map((item, index) => {
    switch (item.type) {
      case 'admin':
        return <NavGroup key={index} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Admin Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      {user === 'user' && navItems} {/* Render navItems if user is 'user' */}
      {user === 'admin' && adminItems}
    </>
  );
};

export default MenuList;
