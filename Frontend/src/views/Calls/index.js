/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Iconify from '../../ui-component/iconify';
import AddCalls from './Addcalls';
import { useNavigate } from 'react-router';
import { getApi, postApi } from '../../service/api';
// ----------------------------------------------------------------------

const Call = () => {
  const userRole = localStorage.getItem('userRole');
  const userid = localStorage.getItem('user_id');

  const [openAdd, setOpenAdd] = useState(false);
  const [callData, setCallData] = useState([]);

  const navigate = useNavigate();

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const getAllCallData = async () => {
    const response = await getApi(userRole === 'admin' ? `call/list` : `call/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setCallData(response?.data?.allCallData);
    }
  };

  const addCall = async (values) => {
    const data = values;
    const result = await postApi('call/add', data);
    if (result && result.status === 201) {
      getAllCallData();
    }
  };

  useEffect(() => {
    getAllCallData();
  }, []);
  const columns = [
    {
      field: '_id',
      headerName: 'S.No',
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
          navigate(`/dashboard/calls/view/${params.row._id}`);
        };

        return <Box onClick={handleFirstNameClick}>{params.value}</Box>;
      }
    },

    {
      field: 'startDateTime',
      headerName: 'Start Date',
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleString(undefined, dateOptions);
      }
    },

    {
      field: 'duration',
      headerName: 'Duration',
      flex: 1
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'relatedTo',
      headerName: 'Related To',
      flex: 1
    }
  ];

  return (
    <>
      <AddCalls open={openAdd} handleClose={handleCloseAdd} addCall={addCall} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4"> Call Lists</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Call
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={callData ?? []}
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

export default Call;
