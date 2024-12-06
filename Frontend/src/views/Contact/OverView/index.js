import { Box, Container, Grid, Stack, Tab, Tabs } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Card from '@mui/material/Card';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import Actionbutton from '../../../ui-component/Actionbutton';
import { deleteApi, getApi, EditApi, postApi } from '../../../service/api';
import EditContact from '../Edit';
import DeleteModel from '../../../ui-component/Deletemodle';
import Lead from '../OverView/Lead';
import Claim from '../../../ui-component/claim/Claim';
import Notes from '../../../ui-component/note/Note';
import Calls from '../../../ui-component/call/Call';
import Meetings from '../../../ui-component/meeting/Meeting';
import Emails from '../../../ui-component/email/Email';
import Task from '../../../ui-component/task/Task';
import Header from '../../../ui-component/Header';
import Overview from './Overview';
import Moreinformation from './Moreinformation';
import Other from './Other';
import Policy from './Policy';
import { CustomTabPanel, a11yProps } from '../../../ui-component/CustomTabPanel';

const ContactView = () => {
  const [contactData, setContactData] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [value, setValue] = useState(0);
  const [isVisibleLead, setIsVisibleLead] = useState(false);
  const [isVisibleClaim, setIsVisibleClaim] = useState(false);
  const [isVisiblePolicy, setIsVisiblePolicy] = useState(false);
  const [isVisibleEvent, setIsVisibleEvent] = useState(false);
  const [isVisibleNotes, setIsVisibleNotes] = useState(false);
  const [isVisibleCall, setIsVisibleCall] = useState(false);
  const [isVisibleMeetings, setIsVisibleMeetings] = useState(false);
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
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

  // toggleButton
  const toggleVisibilityLead = () => setIsVisibleLead(!isVisibleLead);
  const toggleVisibilityEvent = () => setIsVisibleEvent(!isVisibleEvent);
  const toggleVisibilityClaim = () => setIsVisibleClaim(!isVisibleClaim);
  const toggleVisibilityPolicy = () => setIsVisiblePolicy(!isVisiblePolicy);
  const toggleVisibilityNotes = () => setIsVisibleNotes(!isVisibleNotes);
  const toggleVisibilityCall = () => setIsVisibleCall(!isVisibleCall);
  const toggleVisibilityMeeting = () => setIsVisibleMeetings(!isVisibleMeetings);
  const toggleVisibilityEmail = () => setIsVisibleEmail(!isVisibleEmail);

  const back = () => {
    navigate('/dashboard/contact');
  };

  // fetch api
  const getAllContactDetails = async () => {
    const result = await getApi(`contact/view/${params.id}`);
    if (result && result.status === 200) {
      setContactData(result?.data[0]);
    }
  };
  // delete api
  const deleteContactDetail = async () => {
    await deleteApi(`contact/delete/${params.id}`);
    navigate('/dashboard/contact');
  };

  // edit Lead api
  const editContactDetails = async (values) => {
    const data = values;
    const result = await EditApi(`contact/edit/${params.id}`, data);
    if (result && result.status === 200) {
      getAllContactDetails();
      navigate('/dashboard/contact');
    }
  };

  useEffect(() => {
    getAllContactDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Export data in csv file
  const contactCsvData = [
    {
      firstName: contactData?.firstName,
      lastName: contactData?.lastName,
      dateOfBirth: dayjs(contactData?.dateOfBirth).format('DD-MM-YYYY'),
      gender: contactData?.gender,
      phoneNumber: contactData?.phoneNumber,
      emailAddress: contactData?.emailAddress,
      address: contactData?.address,
      alternatePhoneNumber: contactData?.alternatePhoneNumber,
      additionalEmailAddress: contactData?.additionalEmailAddress,
      instagramProfile: contactData?.instagramProfile,
      twitterProfile: contactData?.twitterProfile,
      preferredContactMethod: contactData?.preferredContactMethod,
      referralSource: contactData?.referralSource,
      referralContactName: contactData?.referralContactName,
      relationshipToReferrer: contactData?.relationshipToReferrer,
      preferencesForMarketingCommunications: contactData?.preferencesForMarketingCommunications,
      preferredLanguage: contactData?.preferredLanguage,
      createdOn: dayjs(contactData?.createdOn).format('DD-MM-YYYY HH:mm:ss'),
      modifiedOn: dayjs(contactData?.modifiedOn).format('DD-MM-YYYY HH:mm:ss')
    }
  ];

  const handleExport = () => {
    const csvString = Papa.unparse(contactCsvData);
    const csvBlob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const downloadLink = document.createElement('a');

    downloadLink.href = csvUrl;
    downloadLink.setAttribute('download', `${'first'} ${'lastName'} Contact_Data.csv`);
    downloadLink.click();
  };

  // add claim api
  const addClaimData = async (values) => {
    const data = values;
    const result = await postApi('claim/add', data);
    if (result && result.status === 201) {
      getAllContactDetails();
    }
  };

  // edit api
  const editClaimData = async (values, id) => {
    const data = values;
    const result = await EditApi(`claim/edit/${id}`, data);
    if (result && result.status === 200) {
      getAllContactDetails();
    }
  };

  // delete api
  const deleteClaimData = async (id) => {
    const result = await deleteApi(`claim/delete/${id}`);
    if (result && result.status === 200) {
      getAllContactDetails();
    }
  };

  // add note api
  const addNoteDetailsData = async (values) => {
    const data = values;
    const result = await postApi('note/add', data);
    if (result && result.status === 201) {
      getAllContactDetails();
    }
  };

  // edit Note api
  const editNoteDetailsData = async (values, id) => {
    const data = values;
    const result = await EditApi(`note/edit/${id}`, data);
    if (result && result.status === 200) {
      getAllContactDetails();
    }
  };

  // delete Note api
  const deleteNoteDetailsData = async (id) => {
    const result = await deleteApi(`note/delete/${id}`);
    if (result && result.status === 200) {
      getAllContactDetails();
    }
  };

  // add task api
  const addTaskDetailsData = async (values) => {
    const data = values;
    const result = await postApi('task/add', data);
    if (result && result.status === 201) {
      getAllContactDetails();
    }
  };

  // add meeting api
  const addMeetingData = async (values) => {
    const data = values;
    const result = await postApi('meeting/add', data);
    if (result && result.status === 201) {
      getAllContactDetails();
    }
  };

  // add email api
  const addEmailData = async (values) => {
    const data = values;
    const result = await postApi('email/add', data);
    if (result && result.status === 201) {
      getAllContactDetails();
    }
  };

  // add call api
  const addCallData = async (values) => {
    const data = values;
    const result = await postApi('call/add', data);
    if (result && result.status === 201) {
      getAllContactDetails();
    }
  };

  // edit api
  const editCallDetailsData = async (values, id) => {
    const data = values;
    const result = await EditApi(`call/edit/${id}`, data);
    if (result && result.status === 200) {
      getAllContactDetails();
    }
  };

  //add lead api
  const addLead = async (values) => {
    const data = values;
    const result = await postApi('lead/add', data);
    if (result && result.status === 201) {
      getAllContactDetails();
    }
  };

  return (
    <div>
      {/* Add Edit Model */}
      <EditContact open={openEdit} handleClose={handleCloseEdit} editContact={editContactDetails} editData={contactData} />

      {/* open Delete Model */}
      <DeleteModel openDelete={openDelete} handleCloseDelete={handleCloseDelete} deleteData={deleteContactDetail} deleteId={params.id} />

      <Container>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" mb={3} justifyContent={'space-between'} width={'100%'}>
            <Header title={`${'Kavin'} ${'petter'}`} subtitle="Contact Details" />
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
            <Overview data={contactData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Moreinformation data={contactData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Other data={contactData} />
          </CustomTabPanel>
        </Box>

        {/* Policy Table */}
        <Card sx={{ marginTop: '50px' }}>
          <Policy
            toggleVisibilityPolicy={toggleVisibilityPolicy}
            isVisiblePolicy={isVisiblePolicy}
            getAllContactDetails={getAllContactDetails}
            rows={contactData.policies}
          />
        </Card>

        {/* Claim Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Claim
            toggleVisibilityClaim={toggleVisibilityClaim}
            isVisibleClaim={isVisibleClaim}
            addClaimData={addClaimData}
            editClaimData={editClaimData}
            deleteClaimData={deleteClaimData}
            rows={contactData.claimhistories}
          />
        </Card>

        {/* Lead Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Lead toggleVisibilityLead={toggleVisibilityLead} isVisibleLead={isVisibleLead} addLead={addLead} rows={contactData.leads} />
        </Card>

        {/* Notes Table */}
        <Card sx={{ marginTop: '50px' }}>
          <Notes
            toggleVisibilityNotes={toggleVisibilityNotes}
            isVisibleNotes={isVisibleNotes}
            addNoteDetailsData={addNoteDetailsData}
            editNoteDetailsData={editNoteDetailsData}
            deleteNoteDetailsData={deleteNoteDetailsData}
            rows={contactData?.notes}
            id={params?.id}
          />
        </Card>

        {/* Task Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Task
            toggleVisibilityTask={toggleVisibilityEvent}
            isVisibleTask={isVisibleEvent}
            addTaskDetailsData={addTaskDetailsData}
            rows={contactData?.tasks}
            id={params?.id}
          />
        </Card>

        {/* Meetings Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Meetings
            toggleVisibilityMeeting={toggleVisibilityMeeting}
            isVisibleMeetings={isVisibleMeetings}
            addMeetingData={addMeetingData}
            rows={contactData?.meetings}
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
            rows={contactData?.calls}
            editCallDetailsData={editCallDetailsData}
          />
        </Card>

        {/* Emails Table */}
        <Card sx={{ marginTop: '20px' }}>
          <Emails
            toggleVisibilityEmail={toggleVisibilityEmail}
            isVisibleEmail={isVisibleEmail}
            addEmailData={addEmailData}
            rows={contactData?.emails}
            id={params?.id}
          />
        </Card>
      </Container>
    </div>
  );
};

export default ContactView;
