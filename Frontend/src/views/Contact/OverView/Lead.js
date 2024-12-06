/* eslint-disable react/prop-types */
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AddLead from '../../Lead/AddLead';
import TableStyleTwo from '../../../ui-component/TableStyleTwo';

const Lead = ({ toggleVisibilityLead, isVisibleLead, rows, addLead }) => {
  const [openAdd, setOpenAdd] = useState(false);
  const navigate = useNavigate();

  // open add model
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const columns = [
    {
      field: 'firstName',
      headerName: 'First Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          navigate(`/dashboard/lead/view/${params.row._id}`);
        };
        return <Box onClick={handleFirstNameClick}>{params.value}</Box>;
      }
    },
    { field: 'lastName', headerName: 'Last Name', flex: 1, cellClassName: 'name-column--cell--capitalize' },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    { field: 'emailAddress', headerName: 'Email Address', flex: 1 }
  ];

  return (
    <div>
      {/* Add Lead */}
      <AddLead open={openAdd} handleClose={handleCloseAdd} addLead={addLead} />

      <Box style={{ cursor: 'pointer' }} p={2}>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" justifyContent={'space-between'} width={'100%'}>
            <Stack direction="row" spacing={1} alignItems={'center'}>
              <Button
                onClick={toggleVisibilityLead}
                color="primary"
                variant="contained"
                sx={{ width: '28px', minWidth: '0px', padding: '0px' }}
              >
                {isVisibleLead ? <RemoveIcon /> : <AddIcon />}
              </Button>
              <LeaderboardIcon />
              <Typography variant="h6">Lead</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
              {isVisibleLead && (
                <Button variant="contained" color="secondary" size="small" startIcon={<AddIcon />} onClick={handleOpenAdd}>
                  Lead
                </Button>
              )}
            </Stack>
          </Stack>
        </Grid>
      </Box>
      {isVisibleLead && (
        <TableStyleTwo>
          <Box width="100%" height="30vh">
            <DataGrid rows={rows ?? []} columns={columns} getRowId={(row) => row._id} columnHeaderHeight={40} />
          </Box>
        </TableStyleTwo>
      )}
    </div>
  );
};

export default Lead;
