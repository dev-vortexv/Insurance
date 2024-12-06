/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import AddEmails from './Addemail';
import { getApi, postApi } from '../../service/api';

// ----------------------------------------------------------------------

const Emails = () => {
  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const [openAdd, setOpenAdd] = useState(false);
  const [emailData, setEmailData] = useState([]);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const getAllEmailData = async () => {
    const response = await getApi(userRole === 'admin' ? `email/list` : `email/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setEmailData(response?.data?.allEmailData);
    }
  };

  const addEmail = async (values) => {
    const data = values;
    const result = await postApi('email/add', data);
    if (result && result.status === 201) {
      getAllEmailData();
    }
  };

  useEffect(() => {
    getAllEmailData();
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
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'sender',
      headerName: 'Sender',
      flex: 1
    },
    {
      field: 'receiver',
      headerName: 'Receiver',
      flex: 1
    },
    {
      field: 'createdBy',
      headerName: 'CreatedBy',
      flex: 1,
      renderCell: (params) => {
        const handleAssignClick = () => {
          navigate(`/dashboard/user/view/${params?.row?.createdBy?._id}`);
        };
        return <Box onClick={handleAssignClick}>{`${params.row.createdBy.firstName} ${params.row.createdBy.lastName}`}</Box>;
      }
    }
  ];

  return (
    <>
      <AddEmails open={openAdd} handleClose={handleCloseAdd} addEmail={addEmail} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4"> Emails Lists</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Emails
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={emailData ?? []}
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

export default Emails;
