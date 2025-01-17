/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, Container, Grid, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line arrow-body-style
import { useNavigate, useParams } from 'react-router-dom';
import Papa from 'papaparse';
import dayjs from 'dayjs';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import LeadEdit from '../Edit';
import DeleteModel from '../../../ui-component/Deletemodle';
import Actionbutton from '../../../ui-component/Actionbutton';
import Notes from '../../../ui-component/note/Note';
import Calls from '../../../ui-component/call/Call';
import Meetings from '../../../ui-component/meeting/Meeting';
import Emails from '../../../ui-component/email/Email';
import Tasks from '../../../ui-component/task/Task';
import Header from '../../../ui-component/Header';
import Overview from './Overview';
import Moreinformation from './Moreinformation';
import Other from './Other';
import { deleteApi, getApi, EditApi, postApi } from '../../../service/api';
import { CustomTabPanel, a11yProps } from '../../../ui-component/CustomTabPanel';

// eslint-disable-next-line no-unused-vars
const View = () => {
  const [leadData, setLeadData] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [value, setValue] = useState(0);
  const [isVisibleNotes, setIsVisibleNotes] = useState(false);
  const [isVisibleCall, setIsVisibleCall] = useState(false);
  const [isVisibleMeetings, setIsVisibleMeetings] = useState(false);
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const [isVisibleTask, setIsVisibleTask] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  // open edit model
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  // open delete model
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // tab
  const handleChange = (event, newValue) => setValue(newValue);

  // toggleButtons
  const toggleVisibilityNotes = () => setIsVisibleNotes(!isVisibleNotes);
  const toggleVisibilityCall = () => setIsVisibleCall(!isVisibleCall);
  const toggleVisibilityMeeting = () => setIsVisibleMeetings(!isVisibleMeetings);
  const toggleVisibilityEmail = () => setIsVisibleEmail(!isVisibleEmail);
  const toggleVisibilityTask = () => setIsVisibleTask(!isVisibleTask);

  const back = () => {
    navigate('/dashboard/lead');
  };

  // fetch api
  const getAllLeadDetail = async () => {
    const result = await getApi(`lead/view/${params.id}`);
    if (result && result.status === 200) {
      setLeadData(result?.data?.lead);
    }
  };

  // delete api
  const deleteLeadData = async () => {
    await deleteApi(`lead/delete/${params.id}`);
    navigate('/dashboard/lead');
  };

  // edit Lead api
  const editLead = async (values) => {
    const data = values;
    const result = await EditApi(`lead/edit/${params?.id}`, data);

    if (result && result.status === 200) {
      getAllLeadDetail();
      navigate('/dashboard/lead');
    }
  };

  useEffect(() => {
    getAllLeadDetail();
  }, []);

  // Export data in csv file
  const leadCsvData = [
    {
      title: leadData?.title,
      firstName: leadData?.firstName,
      lastName: leadData?.lastName,
      dateOfBirth: dayjs(leadData?.dateOfBirth).format('DD-MM-YYYY'),
      gender: leadData?.gender,
      phoneNumber: leadData?.phoneNumber,
      emailAddress: leadData?.emailAddress,
      address: leadData?.address,
      leadSource: leadData?.leadSource,
      leadStatus: leadData?.leadStatus,
      leadScore: leadData?.leadScore,
      alternatePhoneNumber: leadData?.alternatePhoneNumber,
      additionalEmailAddress: leadData?.additionalEmailAddress,
      instagramProfile: leadData?.instagramProfile,
      twitterProfile: leadData?.twitterProfile,
      typeOfInsurance: leadData?.typeOfInsurance,
      desiredCoverageAmount: leadData?.desiredCoverageAmount,
      specificPolicyFeatures: leadData?.specificPolicyFeatures,
      QualificationStatus: leadData?.QualificationStatus,
      policyType: leadData?.policyType,
      policyNumber: leadData?.policyNumber,
      startDate: dayjs(leadData?.startDate).format('DD-MM-YYYY'),
      endDate: dayjs(leadData?.endDate).format('DD-MM-YYYY'),
      coverageAmount: leadData?.coverageAmount,
      termLength: leadData?.termLength,
      conversionReason: leadData?.conversionReason,
      conversionDateTime: leadData?.conversionDateTime,
      leadCategory: leadData?.leadCategory,
      leadPriority: leadData?.leadPriority,
      assigned_agent: `${leadData?.assigned_agent?.firstName} ${leadData?.assigned_agent?.firstName}`,
      createdOn: dayjs(leadData?.createdOn).format('DD-MM-YYYY HH:mm:ss'),
      modifiedOn: dayjs(leadData?.modifiedOn).format('DD-MM-YYYY HH:mm:ss')
    }
  ];
  const handleExport = () => {
    const csvString = Papa.unparse(leadCsvData);
    const csvBlob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const downloadLink = document.createElement('a');

    downloadLink.href = csvUrl;
    downloadLink.setAttribute('download', `Lead_Data`);
    downloadLink.click();
  };

  // add call api
  const addCallData = async (values) => {
    const data = values;
    const result = await postApi('call/add', data);
    if (result && result.status === 201) {
      getAllLeadDetail();
    }
  };

  // edit api
  const editCallDetailsData = async (values, id) => {
    const data = values;
    const result = await EditApi(`call/edit/${id}`, data);
    if (result && result.status === 200) {
      getAllLeadDetail();
    }
  };

  // add note api
  const addNoteDetailsData = async (values) => {
    const data = values;
    const result = await postApi('note/add', data);
    if (result && result.status === 201) {
      getAllLeadDetail();
    }
  };

  // edit api
  const editNoteDetailsData = async (values, id) => {
    const data = values;
    const result = await EditApi(`note/edit/${id}`, data);
    if (result && result.status === 200) {
      getAllLeadDetail();
    }
  };

  // delete api
  const deleteNoteDetailsData = async (id) => {
    const result = await deleteApi(`note/delete/${id}`);
    if (result && result.status === 200) {
      getAllLeadDetail();
    }
  };

  // add task api
  const addTaskDetailsData = async (values) => {
    const data = values;
    const result = await postApi('task/add', data);
    if (result && result.status === 201) {
      getAllLeadDetail();
    }
  };

  // add meeting api
  const addMeetingData = async (values) => {
    const data = values;
    const result = await postApi('meeting/add', data);
    if (result && result.status === 201) {
      getAllLeadDetail();
    }
  };

  // add email api
  const addEmailData = async (values) => {
    const data = values;
    const result = await postApi('email/add', data);
    if (result && result.status === 201) {
      getAllLeadDetail();
    }
  };

  return (
    <div>
      {/* Add Edit Model */}
      <LeadEdit open={openEdit} handleClose={handleCloseEdit} editLead={editLead} leadData={leadData} />
      {/* open Delete Model */}
      <DeleteModel openDelete={openDelete} handleCloseDelete={handleCloseDelete} deleteData={deleteLeadData} deleteId={params.id} />
      <Container>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" mb={3} justifyContent={'space-between'} width={'100%'}>
            <Header title={`${'Mr'} ${'jhon'} ${'Doe'}`} subtitle="Lead-Details" />
            <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
              {/* Action Butoon */}
              <Actionbutton handleOpenEdit={handleOpenEdit} handleOpenDelete={handleOpenDelete} handleExport={handleExport} back={back} />
            </Stack>
          </Stack>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '0px' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="OVERVIEW" {...a11yProps(0)} />
              <Tab label="MORE INFORMATION" {...a11yProps(1)} />
              <Tab label="OTHER" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Overview data={leadData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Moreinformation data={leadData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Other data={leadData} />
          </CustomTabPanel>
        </Box>

        {/* Notes Table */}
        <Card sx={{ marginTop: '50px' }}>
          <Notes
            toggleVisibilityNotes={toggleVisibilityNotes}
            isVisibleNotes={isVisibleNotes}
            addNoteDetailsData={addNoteDetailsData}
            editNoteDetailsData={editNoteDetailsData}
            deleteNoteDetailsData={deleteNoteDetailsData}
            rows={leadData?.notes}
            id={params?.id}
          />
        </Card>

        {/* Tasks Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Tasks
            toggleVisibilityTask={toggleVisibilityTask}
            isVisibleTask={isVisibleTask}
            addTaskDetailsData={addTaskDetailsData}
            rows={leadData?.tasks}
            id={params?.id}
          />
        </Card>

        {/* Meetings Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Meetings
            toggleVisibilityMeeting={toggleVisibilityMeeting}
            isVisibleMeetings={isVisibleMeetings}
            addMeetingData={addMeetingData}
            rows={leadData?.meetings}
            id={params?.id}
          />
        </Card>

        {/* Calls Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Calls
            toggleVisibilityCall={toggleVisibilityCall}
            isVisibleCall={isVisibleCall}
            addCallData={addCallData}
            id={params?.id}
            rows={leadData?.calls}
            editCallDetailsData={editCallDetailsData}
          />
        </Card>

        {/* Emails Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Emails
            toggleVisibilityEmail={toggleVisibilityEmail}
            isVisibleEmail={isVisibleEmail}
            addEmailData={addEmailData}
            rows={leadData?.emails}
            id={params?.id}
          />
        </Card>
      </Container>
    </div>
  );
};

export default View;
