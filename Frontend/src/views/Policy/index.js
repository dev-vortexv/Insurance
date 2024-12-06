/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import { getApi } from '../../service/api';
import AddPolicy from './AddPolicy';

// ----------------------------------------------------------------------

const PolicyManagement = () => {
  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const [openAdd, setOpenAdd] = useState(false);
  const [policyList, setPolicyList] = useState([]);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const getAllPolicyData = async () => {
    const response = await getApi(userRole === 'admin' ? `policy/list` : `policy/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setPolicyList(response?.data?.allPolicyData);
    }
  };

  useEffect(() => {
    getAllPolicyData();
  }, []);

  const navigate = useNavigate();
  const columns = [
    {
      field: '_id',
      headerName: 'S.No',
      flex: 0.5,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      valueGetter: (index) => index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1
    },
    {
      field: 'policyNumber',
      headerName: 'Policy Number',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          navigate(`/dashboard/policy/view/${params.row._id}`);
        };
        return <Box onClick={handleFirstNameClick}>{params.value}</Box>;
      }
    },
    {
      field: 'policyType',
      headerName: 'PolicyType',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'policyStartDate',
      headerName: 'Policy StartDate',
      flex: 1
    },
    {
      field: 'policyEndDate',
      headerName: 'Policy EndDate',
      flex: 1
    },
    {
      field: 'policyStatus',
      headerName: 'Policy Status',
      flex: 1
    }
  ];

  return (
    <>
      <AddPolicy open={openAdd} handleClose={handleCloseAdd} getAllContactDetails={getAllPolicyData} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Policy Management</Typography> {/* Translate the title */}
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Policy {/* Translate the button label */}
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={policyList ?? []}
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

export default PolicyManagement;
