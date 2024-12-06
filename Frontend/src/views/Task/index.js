/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import AddTask from './AddTask';
import { getApi, postApi } from '../../service/api';

// ----------------------------------------------------------------------

const Task = () => {
  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();

  const [openAdd, setOpenAdd] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const getAllTaskData = async () => {
    const response = await getApi(userRole === 'admin' ? `task/list` : `task/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setTaskList(response?.data?.taskAllData);
    }
  };

  // add task api
  const addTask = async (values) => {
    const data = values;
    const result = await postApi('task/add', data);
    if (result && result.status === 201) {
      getAllTaskData();
    }
  };

  useEffect(() => {
    getAllTaskData();
  }, []);

  const columns = [
    {
      field: '_id',
      headerName: 'S.No.',
      flex: 0.5,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      valueGetter: (index) => index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1
    },
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
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleString(undefined, dateOptions);
      }
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleString(undefined, dateOptions);
      }
    },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1
    },
    {
      field: 'relatedTo',
      headerName: 'Related To',
      flex: 1
    }
  ];

  return (
    <>
      <AddTask open={openAdd} handleClose={handleCloseAdd} addTask={addTask} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Task Lists</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Task
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={taskList ?? []}
                columns={columns}
                getRowId={(row) => row._id}
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { showQuickFilter: true } }}
              />
            </Card>
          </Box>
        </TableStyle>
      </Container>
    </>
  );
};

export default Task;
