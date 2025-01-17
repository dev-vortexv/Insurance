import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddEvent from './AddTask';
import TableStyleTwo from '../TableStyleTwo';

// eslint-disable-next-line react/prop-types
const Tasks = ({ toggleVisibilityTask, isVisibleTask, addTaskDetailsData, rows, id }) => {
  const navigate = useNavigate();
  const [openTask, setOpenTask] = useState(false);

  // open task model
  const handleOpenTask = () => setOpenTask(true);
  const handleCloseTask = () => setOpenTask(false);

  const columns = [
    {
      field: 'subject',
      headerName: 'Subject',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          navigate(`/dashboard/task/view/${params.row._id}`);
        };

        return <Box onClick={handleFirstNameClick}>{params.value}</Box>;
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleString();
      }
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleString();
      }
    },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1
    }
  ];

  return (
    <div>
      {/* Add Tasks */}
      <AddEvent open={openTask} handleClose={handleCloseTask} addTaskDetailsData={addTaskDetailsData} _id={id} />

      <Box style={{ cursor: 'pointer' }} p={2}>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" justifyContent={'space-between'} width={'100%'}>
            <Stack direction="row" spacing={1} alignItems={'center'}>
              <Button
                onClick={toggleVisibilityTask}
                color="primary"
                variant="contained"
                sx={{ width: '28px', minWidth: '0px', padding: '0px', height: '25px' }}
              >
                {isVisibleTask ? <RemoveIcon /> : <AddIcon />}
              </Button>
              <AssignmentIcon />
              <Typography variant="h5">Tasks</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
              {isVisibleTask && (
                <Button variant="contained" color="secondary" size="small" startIcon={<AddIcon />} onClick={handleOpenTask}>
                  Create Task
                </Button>
              )}
            </Stack>
          </Stack>
        </Grid>
      </Box>
      {isVisibleTask && (
        <TableStyleTwo>
          <Box width="100%" height="30vh">
            <DataGrid rows={rows ?? []} columns={columns} getRowId={(row) => row._id} columnHeaderHeight={40} />
          </Box>
        </TableStyleTwo>
      )}
    </div>
  );
};

export default Tasks;
