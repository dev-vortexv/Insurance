/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import AddDocuments from './AddDocuments';
import { getApi, postApi, deleteApi } from '../../service/api';

// ----------------------------------------------------------------------

const Documents = () => {
  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const [openAdd, setOpenAdd] = useState(false);
  const [documentData, setDocumentData] = useState([]);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const getAllDocumentData = async () => {
    const response = await getApi(userRole === 'admin' ? `document/list` : `document/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setDocumentData(response?.data?.allDocumentData);
    }
  };

  const addDocumentUpload = async (values) => {
    const data = new FormData();
    data.append('name', values.file.name);
    data.append('file', values.file);
    data.append('fileName', values.fileName);
    data.append('createdBy', values.createdBy);

    const result = await postApi('document/upload', data);
    if (result && result.status === 200) {
      getAllDocumentData();
    }
  };

  // file download api
  const downloadFile = async (id) => {
    await getApi(`document/file/${id}`);
  };

  // file delete api
  const deleteDocument = async (id) => {
    const result = await deleteApi(`document/delete/${id}`);
    if (result && result.status === 200) {
      getAllDocumentData();
    }
  };

  useEffect(() => {
    getAllDocumentData();
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
      field: 'file',
      headerName: 'File',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize'
    },
    {
      field: 'fileName',
      headerName: 'File Name',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'createdOn',
      headerName: 'Create On',
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        return date.toDateString();
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => {
        const handleFirstNameClick = async () => {
          downloadFile(params.row._id);
        };
        const downloadUrl = `${process.env.REACT_APP_BACKEND_URL}document/file/${params.row._id}`;

        return (
          <Box onClick={handleFirstNameClick}>
            <Stack direction={'row'} spacing={2}>
              <a href={downloadUrl}>
                <Button variant="contained" size="small">
                  Download
                </Button>
              </a>
              <Button variant="outlined" size="small" color="error" onClick={() => deleteDocument(params.row._id)}>
                Delete
              </Button>
            </Stack>
          </Box>
        );
      }
    }
  ];

  return (
    <>
      <AddDocuments open={openAdd} handleClose={handleCloseAdd} addDocumentUpload={addDocumentUpload} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4"> Documents Lists</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Document
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={documentData ?? []}
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

export default Documents;
