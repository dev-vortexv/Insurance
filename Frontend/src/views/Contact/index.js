/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// @mui
import { Stack, Button, Container, Typography, Box, Card } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import Iconify from '../../ui-component/iconify';
import AddContact from './AddContact';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditContact from './Edit';
import { postApi, getApi, deleteApi, EditApi } from '../../service/api';
import DeleteModel from '../../ui-component/Deletemodle';
// ----------------------------------------------------------------------

const Contact = () => {
  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [editData, setEditData] = useState('');
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const navigate = useNavigate();

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const getAllContactData = async () => {
    const response = await getApi(userRole === 'admin' ? `contact/list` : `contact/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setContactList(response?.data?.allContactData);
    }
  };

  useEffect(() => {
    getAllContactData();
  }, []);

  // add contact api
  const addContact = async (values) => {
    const data = values;
    const result = await postApi('contact/add', data);
    if (result && result.status === 201) {
      getAllContactData();
    }
  };

  const deleteContact = async (id) => {
    const result = await deleteApi(`contact/delete/${id}`, id);
    if (result && result.status === 200) {
      getAllContactData();
    }
    handleCloseDelete();
  };

  // edit Lead api
  const editContact = async (values) => {
    const data = values;
    const result = await EditApi(`contact/edit/${editData._id}`, data);
    if (result && result.status === 200) {
      getAllContactData();
    }
  };

  const columns = [
    {
      field: '_id',
      headerName: `S.No`,
      flex: 0.5,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      valueGetter: (index) => index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1
    },
    {
      field: 'firstName',
      headerName: `First Name`,
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          navigate(`/dashboard/contact/view/${params.row._id}`);
        };

        return <Box onClick={handleFirstNameClick}>{params.value}</Box>;
      }
    },
    {
      field: 'lastName',
      headerName: `Last Name`,
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'gender',
      headerName: `Gender`,
      flex: 1
    },
    {
      field: 'phoneNumber',
      headerName: `PhoneNumber`,
      flex: 1
    },
    {
      field: 'emailAddress',
      headerName: `Email Address`,
      flex: 1
    },
    {
      field: 'action',
      headerName: `Action`,
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
              <EditContact open={openEdit} editContact={editContact} handleClose={handleCloseEdit} editData={editData} />
              <Box onClick={() => handleEditClick(params?.row)}>
                <EditIcon sx={{ color: '#6F2DA8' }} />
              </Box>
              <DeleteModel openDelete={openDelete} deleteId={deleteId} handleCloseDelete={handleCloseDelete} deleteData={deleteContact} />
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
      <AddContact open={openAdd} handleClose={handleCloseAdd} addContact={addContact} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Contact Management</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Contact
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={contactList ?? []}
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

export default Contact;
