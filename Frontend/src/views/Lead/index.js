/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, Button, Container, Typography, Box, Card } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Iconify from '../../ui-component/iconify';
import TableStyle from '../../ui-component/TableStyle';
import AddLead from './AddLead.js';
import EditModel from './Edit';
import { getApi, postApi, EditApi } from '../../service/api';
import DeleteModel from '../../ui-component/Deletemodle';
import { deleteApi } from '../../service/api';

// ----------------------------------------------------------------------

const Lead = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [leadData, setLeadData] = useState([]);
  const [editData, setEditData] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [openDelete, setOpenDelete] = useState(false);

  const navigate = useNavigate();

  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const getAllLeadData = async () => {
    const response = await getApi(userRole === 'admin' ? `lead/list` : `lead/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setLeadData(response?.data?.leadAllData);
    }
  };

  const addLead = async (values) => {
    const data = values;
    const result = await postApi('lead/add', data);
    if (result && result.status === 201) {
      getAllLeadData();
    }
  };

  const deleteLead = async (id) => {
    const result = await deleteApi(`lead/delete/${id}`, id);
    if (result && result.status === 200) {
      getAllLeadData();
    }
    handleCloseDelete();
  };

  // edit Lead api
  const editLead = async (values) => {
    const data = values;
    const result = await EditApi(`lead/edit/${editData?._id}`, data);

    if (result && result.status === 200) {
      getAllLeadData();
    }
  };

  useEffect(() => {
    getAllLeadData();
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
      field: 'firstName',
      headerName: 'First Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          navigate(`/dashboard/lead/view/${params?.row._id}`);
        };

        return <Box onClick={handleFirstNameClick}>{params?.value}</Box>;
      }
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'gender',
      headerName: 'Gender',
      flex: 1
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'emailAddress',
      headerName: 'Email Address',
      flex: 1
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => {
        const handleEditClick = async (data) => {
          setEditData(data);
          handleOpenEdit();
        };
        const handleDeleteClick = async (data) => {
          setDeleteId(data._id);
          handleOpenDelete();
        };
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EditModel open={openEdit} editLead={editLead} handleClose={handleCloseEdit} leadData={editData} />
              <Box onClick={() => handleEditClick(params?.row)}>
                <EditIcon sx={{ color: '#6F2DA8' }} />
              </Box>
              <DeleteModel openDelete={openDelete} deleteId={deleteId} handleCloseDelete={handleCloseDelete} deleteData={deleteLead} />
              <Box onClick={() => handleDeleteClick(params?.row)}>
                <DeleteIcon sx={{ color: 'red' }} />
              </Box>
            </Box>
          </>
        );
      }
    }
  ];

  return (
    <>
      <AddLead open={openAdd} handleClose={handleCloseAdd} addLead={addLead} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Lead-Management</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Lead
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={leadData}
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

export default Lead;
