/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, Stack, Tab, Tabs } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Actionbutton from '../../../ui-component/Actionbutton';
import { useNavigate } from 'react-router-dom';
import Editcalls from '../Editcalls';
import Overview from '../OverView/Overview';
import Other from '../OverView/Other';
import DeleteModel from '../../../ui-component/Deletemodle';
import { getApi, deleteApi, EditApi } from '../../../service/api';
import Header from '../../../ui-component/Header';
import { CustomTabPanel, a11yProps } from '../../../ui-component/CustomTabPanel';

// eslint-disable-next-line arrow-body-style
const View = () => {
  const [callData, setCallData] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const params = useParams();

  // open Edit model
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  // open delete model
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // tab
  const handleChange = (event, newValue) => setValue(newValue);

  const back = () => {
    navigate('/dashboard/call');
  };

  // fetch api
  const getAllCallData = async () => {
    const result = await getApi(`call/view/${params.id}`);
    if (result && result.status === 200) {
      setCallData(result?.data?.calls);
    }
  };

  // delete api
  const deleteCallData = async () => {
    await deleteApi(`call/delete/${params.id}`);
    navigate('/dashboard/call');
  };

  const editCallData = async (values) => {
    const data = values;
    const result = await EditApi(`call/edit/${params?.id}`, data);

    if (result && result.status === 200) {
      getAllCallData();
    }
  };

  useEffect(() => {
    getAllCallData();
  }, []);

  return (
    <div>
      {/* open Edit Model */}
      <Editcalls open={openEdit} handleClose={handleCloseEdit} callData={callData} editCallData={editCallData} />

      {/* open Delete Model */}
      <DeleteModel openDelete={openDelete} handleCloseDelete={handleCloseDelete} deleteData={deleteCallData} deleteId={params.id} />

      <Container>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" mb={3} justifyContent={'space-between'} width={'100%'}>
            <Header title="Call Details" />
            <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
              {/* Action Butoon */}
              <Actionbutton handleOpenEdit={handleOpenEdit} handleOpenDelete={handleOpenDelete} back={back} />
            </Stack>
          </Stack>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '0px' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="OVERVIEW" {...a11yProps(0)} />
              <Tab label="OTHER" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Overview data={callData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Other data={callData} />
          </CustomTabPanel>
        </Box>
      </Container>
    </div>
  );
};

export default View;
