/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, Stack, Tab, Tabs } from '@mui/material';
import React, { useState, useEffect } from 'react';

import Actionbutton from '../../../ui-component/Actionbutton';

// eslint-disable-next-line arrow-body-style

import { useNavigate, useParams } from 'react-router-dom';

import Editmeetings from '../Editmeetings';
import DeleteModel from '../../../ui-component/Deletemodle';
import Overview from './Overview';
import Other from './Other';

// eslint-disable-next-line arrow-body-style
import { getApi, deleteApi, EditApi } from '../../../service/api';
import Header from '../../../ui-component/Header';
import { CustomTabPanel, a11yProps } from '../../../ui-component/CustomTabPanel';

const View = () => {
  const [meetingData, setMeetingData] = useState({});
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
    navigate('/dashboard/meeting');
  };

  // get api
  const getAllMeetingData = async () => {
    const result = await getApi(`meeting/view/${params.id}`);
    if (result && result.status === 200) {
      setMeetingData(result?.data?.meetings);
    }
  };

  // delete api
  const deleteMeetingData = async () => {
    await deleteApi(`meeting/delete/${params.id}`);
    navigate('/dashboard/meeting');
  };

  // edit api
  const editMeetingData = async (values) => {
    const data = values;
    const result = await EditApi(`meeting/edit/${params.id}`, data);
    if (result && result.status === 200) {
      getAllMeetingData();
    }
  };

  useEffect(() => {
    getAllMeetingData();
  }, []);

  return (
    <div>
      {/* open Edit meetings Model */}
      <Editmeetings open={openEdit} handleClose={handleCloseEdit} editMeetingData={editMeetingData} meetingData={meetingData} />

      {/* open Delete mode */}
      <DeleteModel openDelete={openDelete} handleCloseDelete={handleCloseDelete} deleteData={deleteMeetingData} deleteId={params.id} />

      <Container>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" mb={3} justifyContent={'space-between'} width={'100%'}>
            <Header title="Meeting Details" />
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
            <Overview data={meetingData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Other data={meetingData} />
          </CustomTabPanel>
        </Box>
      </Container>
    </div>
  );
};

export default View;
