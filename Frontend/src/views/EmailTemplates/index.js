/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
// import AddEmailTemplates from './AddTemplates';
import { getApi } from '../../service/api';

// ----------------------------------------------------------------------

const EmailTemplates = () => {
  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const [templatesData, setTemplatesData] = useState([]);
  const navigate = useNavigate();

  const getAllEmailTemplatesData = async () => {
    const response = await getApi(userRole === 'admin' ? `emailtemplate/list` : `emailtemplate/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setTemplatesData(response?.data?.allTemplatesData);
    }
  };

  useEffect(() => {
    getAllEmailTemplatesData();
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
      field: 'name',
      headerName: 'Templates Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          navigate(`/dashboard/emailtemplate/view/${params.row._id}`);
        };

        return <Box onClick={handleFirstNameClick}>{params.value}</Box>;
      }
    },
    {
      field: 'createdOn',
      headerName: 'Create On',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize',
      valueFormatter: (params) => {
        const date = new Date(params.value);
        return date.toDateString();
      }
    },
    {
      field: 'modifiedOn',
      headerName: 'Modified On',
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        return date.toDateString();
      }
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
      {/* <AddEmailTemplates /> */}
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4"> Emails Templates Lists</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              <Link to="/dashboard/emailtemplate/addTemplates" style={{ textDecoration: 'none', color: 'white' }}>
                New Templates
              </Link>
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={templatesData ?? []}
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

export default EmailTemplates;
