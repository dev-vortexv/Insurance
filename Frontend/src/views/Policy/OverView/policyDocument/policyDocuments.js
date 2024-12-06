/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
// @mui
import { Card, Stack, Button, Typography, Box, Grid } from '@mui/material';
// components
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AttachmentIcon from '@mui/icons-material/Attachment';
//import Iconify from '../../../../ui-component/iconify';
// sections
import AddDocument from './Add';
import { postApi, getApi, deleteApi } from '../../../../service/api';
import TableStyleTwo from '../../../../ui-component/TableStyleTwo';

// ----------------------------------------------------------------------

const PolicyDocumentPage = ({ toggleVisibilityPolicyDoc, isVisiblePolicyDoc, rows, getAllPolicyDetails }) => {
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const downloadFile = async (id) => {
    const result = await getApi(`policydocument/file/${id}`);
    if (result && result.status === 200) {
      getAllPolicyDetails();
    }
  };

  const deleteFile = async (id) => {
    const result = await deleteApi(`policydocument/delete/${id}`);
    if (result && result.status === 200) {
      toast.success('File Delete successfully ');
      getAllPolicyDetails();
    }
  };

  const columns = [
    {
      field: 'file',
      headerName: 'File',
      flex: 1
    },

    {
      field: 'fileName',
      headerName: 'File Name',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'createdOn',
      headerName: 'CreateOn',
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
        const downloadUrl = `${process.env.REACT_APP_BACKEND_URL}policydocument/file/${params.row._id}`;

        return (
          <Box onClick={handleFirstNameClick}>
            <Stack direction={'row'} spacing={2}>
              <a href={downloadUrl}>
                <Button variant="contained" size="small">
                  Download
                </Button>
              </a>
              <Button variant="outlined" size="small" color="error" onClick={() => deleteFile(params.row._id)}>
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
      {/* Add Document Model */}
      <AddDocument open={openAdd} handleClose={handleCloseAdd} getAllPolicyDetails={getAllPolicyDetails} />

      <Box p={2} style={{ cursor: 'pointer' }}>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" justifyContent={'space-between'} width={'100%'}>
            <Stack direction="row" spacing={1} alignItems={'center'}>
              <Button
                onClick={toggleVisibilityPolicyDoc}
                color="primary"
                variant="contained"
                sx={{ width: '28px', minWidth: '0px', padding: '0px', height: '25px' }}
              >
                {isVisiblePolicyDoc ? <RemoveIcon /> : <AddIcon />}
              </Button>
              <AttachmentIcon />
              <Typography variant="h5">Policy Documents</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
              {isVisiblePolicyDoc && (
                <Button variant="contained" color="secondary" size="small" startIcon={<AddIcon />} onClick={handleOpenAdd}>
                  Add Document
                </Button>
              )}
            </Stack>
          </Stack>
        </Grid>
      </Box>
      {isVisiblePolicyDoc && (
        <TableStyleTwo>
          <Box width="100%" height="30vh">
            <DataGrid rows={rows ?? []} columns={columns} getRowId={(row) => row._id} columnHeaderHeight={40} />
          </Box>
        </TableStyleTwo>
      )}
    </>
  );
};

export default PolicyDocumentPage;
