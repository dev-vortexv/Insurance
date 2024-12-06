import PropTypes from 'prop-types';
import { useState } from 'react';
// form
import { useForm, Controller } from 'react-hook-form';
// @mui
import { Card, Stack, Popover, Checkbox, MenuItem, IconButton, CardHeader, FormControlLabel, CardActions, Button } from '@mui/material';
// components

import Iconify from '../../../ui-component/iconify';

// ----------------------------------------------------------------------

AppTasks.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
  deleteTaskData: PropTypes.func,
  getAllTaskData: PropTypes.func
};

export default function AppTasks({ title, subheader, list, deleteTaskData, getAllTaskData, ...other }) {
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2']
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5; // Number of cards to display per page

  // Calculate index range of cards to display for the current page
  const indexOfLastUser = currentPage * dataPerPage;
  const indexOfFirstUser = indexOfLastUser - dataPerPage;
  const currentUsersData = list.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const handlePagination = () => {
    if (currentPage === Math.ceil(list.length / dataPerPage)) {
      // If on the last page, move to the previous page
      setCurrentPage(currentPage - 1);
    } else {
      // If not on the last page, move to the next page
      setCurrentPage(currentPage + 1);
    }
  };

  function getButtonLabel(response, currentPage, dataPerPage) {
    if (response.length <= currentPage * dataPerPage) {
      return 'View All';
    } else if (currentPage === Math.ceil(response.length / dataPerPage)) {
      return 'Previous';
    } else {
      return 'View All';
    }
  }

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Controller
        name="taskCompleted"
        control={control}
        render={({ field }) => {
          const onSelected = (task) =>
            field.value.includes(task) ? field.value.filter((value) => value !== task) : [...field.value, task];

          return (
            <>
              {currentUsersData.map((task) => (
                <TaskItem
                  key={task._id}
                  task={task}
                  checked={field.value.includes(task._id)}
                  onChange={() => field.onChange(onSelected(task._id))}
                  deleteTaskData={deleteTaskData}
                  getAllTaskData={getAllTaskData}
                />
              ))}
            </>
          );
        }}
      />
      <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
        <Button size="small" disableElevation onClick={() => handlePagination()}>
          {getButtonLabel(list, currentPage, dataPerPage)}
        </Button>
      </CardActions>
    </Card>
  );
}

// ----------------------------------------------------------------------

TaskItem.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  deleteTaskData: PropTypes.func,
  getAllTaskData: PropTypes.func,
  task: PropTypes.shape({
    _id: PropTypes.string,
    subject: PropTypes.string
  })
};

function TaskItem({ task, checked, onChange, deleteTaskData, getAllTaskData }) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  // const handleMarkComplete = () => {
  //   handleCloseMenu();
  //   console.log('MARK COMPLETE', task._id);
  // };

  const handleDelete = () => {
    deleteTaskData(task._id);
    getAllTaskData();
    handleCloseMenu();
    console.log('DELETE', task._id);
  };

  return (
    <Stack
      direction="row"
      sx={{
        px: 2,
        py: 0.75,
        ...(checked && {
          color: 'text.disabled',
          textDecoration: 'line-through'
        })
      }}
    >
      <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} />} label={task.subject} sx={{ flexGrow: 1, m: 0 }} />

      <IconButton size="large" color="inherit" sx={{ opacity: 0.48 }} onClick={handleOpenMenu}>
        <Iconify icon={'eva:more-vertical-fill'} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75
            }
          }
        }}
      >
        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </Stack>
  );
}
