/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, Stack, Tab, Tabs } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Actionbutton from '../../../ui-component/Actionbutton';
import DeleteModel from '../../../ui-component/Deletemodle';
import Overview from './Overview';
import Other from './Other';
import ViewEdit from '../Edit';
import { getApi, deleteApi, EditApi } from '../../../service/api';
import Header from '../../../ui-component/Header';
import { CustomTabPanel, a11yProps } from '../../../ui-component/CustomTabPanel';

const View = () => {
  const [taskData, setTaskData] = useState({});
  //   const [userAction, setUserAction] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [value, setValue] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  // open Edit model
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  // open delete model
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // tab
  const handleChange = (event, newValue) => setValue(newValue);

  const back = () => {
    navigate('/dashboard/task');
  };

  // fetch api
  const getAllTaskData = async () => {
    const result = await getApi(`task/view/${params.id}`);
    if (result && result.status === 200) {
      setTaskData(result?.data?.tasks);
    }
  };

  // delete api
  const deleteTaskData = async () => {
    await deleteApi(`task/delete/${params.id}`);
    navigate('/dashboard/task');
  };

  const editTaskData = async (values) => {
    const data = values;
    const result = await EditApi(`task/edit/${params.id}`, data);
    if (result && result.status === 200) {
      getAllTaskData();
      navigate('/dashboard/task');
    }
  };

  useEffect(() => {
    getAllTaskData();
  }, []);

  return (
    <div>
      {/* open Edit tasks model */}
      <ViewEdit open={openEdit} handleClose={handleCloseEdit} editTaskData={editTaskData} taskData={taskData} />

      {/* open Delete Model */}
      <DeleteModel openDelete={openDelete} handleCloseDelete={handleCloseDelete} deleteData={deleteTaskData} deleteId={params.id} />

      <Container>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" mb={3} justifyContent={'space-between'} width={'100%'}>
            <Header title="Task Details" />
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
            <Overview data={taskData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Other data={taskData} />
          </CustomTabPanel>
        </Box>
      </Container>
    </div>
  );
};

export default View;
