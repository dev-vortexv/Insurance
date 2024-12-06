/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, Stack, Tab, Tabs } from '@mui/material';
import React, { useState, useEffect } from 'react';

import Actionbutton from '../../../ui-component/Actionbutton';

import Card from '@mui/material/Card';
// eslint-disable-next-line arrow-body-style
import { useNavigate, useParams } from 'react-router-dom';
import Papa from 'papaparse';
import dayjs from 'dayjs';
import Notes from '../../../ui-component/note/Note';
import Header from '../../../ui-component/Header';
import Overview from './Overview';
import Moreinformation from './Moreinformation';
import Other from './Other';
import Claim from '../../../ui-component/claim/Claim';
import DeleteModel from '../../../ui-component/Deletemodle';
import EditModel from '../Edit';
import PolicyDocuments from './policyDocument/policyDocuments';
import { EditApi, deleteApi, getApi, postApi } from '../../../service/api';
import { CustomTabPanel, a11yProps } from '../../../ui-component/CustomTabPanel';

// eslint-disable-next-line no-unused-vars
const View = () => {
  const [policyData, setPolicyData] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [value, setValue] = useState(0);
  const [isVisibleClaim, setIsVisibleClaim] = useState(false);
  const [isVisibleNotes, setIsVisibleNotes] = useState(false);
  const [isVisiblePolicyDoc, setIsVisiblePolicyDoc] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  // open add model
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  // open delete model
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // tab
  const handleChange = (event, newValue) => setValue(newValue);

  // toggleButton
  const toggleVisibilityClaim = () => setIsVisibleClaim(!isVisibleClaim);
  const toggleVisibilityNotes = () => setIsVisibleNotes(!isVisibleNotes);
  const toggleVisibilityPolicyDoc = () => setIsVisiblePolicyDoc(!isVisiblePolicyDoc);

  const back = () => {
    navigate('/dashboard/policy');
  };

  // fetch api
  const getAllPolicyDetails = async () => {
    const result = await getApi(`policy/view/${params.id}`);
    if (result && result.status === 200) {
      setPolicyData(result?.data?.policy[0]);
    }
  };

  // delete api
  const deletePolicyData = async () => {
    await deleteApi(`policy/delete/${params.id}`);
    navigate('/dashboard/policy');
  };

  // edit Policy api
  const editPolicyData = async (values) => {
    const data = values;
    const result = await EditApi(`policy/edit/${params.id}`, data);
    if (result && result.status === 200) {
      getAllPolicyDetails();
      navigate('/dashboard/policy');
    }
  };

  useEffect(() => {
    getAllPolicyDetails();
  }, []);

  // Export data in csv file
  const policyCsvData = [
    {
      policyType: policyData?.policyType,
      policyStartDate: dayjs(policyData?.policyStartDate).format('DD-MM-YYYY'),
      policyEndDate: dayjs(policyData?.policyEndDate).format('DD-MM-YYYY'),
      policyStatus: policyData?.policyStatus,
      coverageAmounts: policyData?.coverageAmounts,
      deductibles: policyData?.deductibles,
      limits: policyData?.limits,
      insuredPersonName: `${policyData?.contact_id?.firstName} ${policyData?.contact_id?.lastName}`,
      insuredPersonDateOfBirth: dayjs(policyData?.insuredPersonDateOfBirth).format('DD-MM-YYYY'),
      phoneNumber: policyData?.phoneNumber,
      emailAddress: policyData?.emailAddress,
      instagramProfile: policyData?.instagramProfile,
      twitterProfile: policyData?.twitterProfile,
      relationshipToTheInsured: policyData?.relationshipToTheInsured,
      additionalInsuredPersonName: policyData?.additionalInsuredPersonName,
      additionalInsuredDateOfBirth: dayjs(policyData?.additionalInsuredDateOfBirth).format('DD-MM-YYYY'),
      additionalRelationshipToTheInsured: policyData?.additionalRelationshipToTheInsured,
      additionalPhoneNumber: policyData?.additionalPhoneNumber,
      additionalEmailAddress: policyData?.additionalEmailAddress,
      additionalInstagramProfile: policyData?.additionalInstagramProfile,
      additionalTwitterProfile: policyData?.additionalTwitterProfile,
      premiumAmount: policyData?.premiumAmount,
      FrequencyOfPremiumPayments: policyData?.FrequencyOfPremiumPayments,
      underwriterName: policyData?.underwriterName,
      underwriterPhone: policyData?.underwriterPhone,
      underwriterEmail: policyData?.underwriterEmail,
      underwriterDecisions: policyData?.underwriterDecisions,
      assigned_agent: `${policyData?.assigned_agent?.firstName} ${policyData?.assigned_agent?.lastName}`,
      createdOn: dayjs(policyData?.createdOn).format('DD-MM-YYYY HH:mm:ss'),
      modifiedOn: dayjs(policyData?.modifiedOn).format('DD-MM-YYYY HH:mm:ss')
    }
  ];
  const handleExport = () => {
    const csvString = Papa.unparse(policyCsvData);
    const csvBlob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const downloadLink = document.createElement('a');

    downloadLink.href = csvUrl;
    downloadLink.setAttribute('download', `Policy_Data.csv`);
    downloadLink.click();
  };

  // add note api
  const addNoteDetailsData = async (values) => {
    const data = values;
    const result = await postApi('note/add', data);
    if (result && result.status === 201) {
      getAllPolicyDetails();
    }
  };

  // edit Note api
  const editNoteDetailsData = async (values, id) => {
    const data = values;
    const result = await EditApi(`note/edit/${id}`, data);
    if (result && result.status === 200) {
      getAllPolicyDetails();
    }
  };

  // delete Note api
  const deleteNoteDetailsData = async (id) => {
    const result = await deleteApi(`note/delete/${id}`);
    if (result && result.status === 200) {
      getAllPolicyDetails();
    }
  };

  // add claim api
  const addClaimData = async (values) => {
    const data = values;
    const result = await postApi('claim/add', data);
    if (result && result.status === 201) {
      getAllPolicyDetails();
    }
  };

  // edit api
  const editClaimData = async (values, id) => {
    const data = values;
    const result = await EditApi(`claim/edit/${id}`, data);
    if (result && result.status === 200) {
      getAllPolicyDetails();
    }
  };

  // delete api
  const deleteClaimData = async (id) => {
    const result = await deleteApi(`claim/delete/${id}`);
    if (result && result.status === 200) {
      getAllPolicyDetails();
    }
  };

  return (
    <div>
      {/* Edit Mode */}
      <EditModel open={openEdit} handleClose={handleCloseEdit} editPolicyData={editPolicyData} policyData={policyData} />

      {/* open Delete Model */}
      <DeleteModel openDelete={openDelete} handleCloseDelete={handleCloseDelete} deleteData={deletePolicyData} deleteId={params.id} />

      <Container>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" mb={3} justifyContent={'space-between'} width={'100%'}>
            <Header title={'policy Data'} subtitle="Policy Details" />
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
            <Overview data={policyData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Moreinformation data={policyData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Other data={policyData} />
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
            rows={policyData?.notes}
            id={params?.id}
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
            rows={policyData.claimhistories}
          />
        </Card>

        {/* PolicyDoc Table */}
        <Card sx={{ marginTop: '20px' }}>
          <PolicyDocuments
            toggleVisibilityPolicyDoc={toggleVisibilityPolicyDoc}
            isVisiblePolicyDoc={isVisiblePolicyDoc}
            getAllPolicyDetails={getAllPolicyDetails}
            rows={policyData.policydocuments}
          />
        </Card>
      </Container>
    </div>
  );
};

export default View;
