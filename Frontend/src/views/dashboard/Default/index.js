import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import TotalContactCard from './TotalContactCard';
import PopularCard from './PopularCard';
import TotalLeadsCard from './TotalLeadsCard';
import PoliciesCard from './TotalPoliciesCard';
import TotalTaskCard from './TotalTaskCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import AppTrafficBySite from './TrafficBySiteCard';
import Iconify from '../../../ui-component/iconify';
import AppTasks from './AppTask';
import AppConversionRates from './AppConversionCard';
import AppCurrentVisits from './AppCurrentVisitCard';
import { getApi, deleteApi } from '../../../service/api';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [leadData, setLeadData] = useState(0);
  const [contactList, setContactList] = useState(0);
  const [policyList, setPolicyList] = useState(0);
  const [taskList, setTaskList] = useState(0);
  const [taskData, setTaskData] = useState([]);
  const [meetingData, setMeetingData] = useState(0);
  const [callData, setCallData] = useState(0);
  const [conversationData, setConversationData] = useState([]);
  const [emailData, setEmailData] = useState([]);
  const [documentData, setDocumentData] = useState([]);
  const [templatesData, setTemplatesData] = useState([]);
  const [calenderData, setCalenderData] = useState([]);
  const [policyGraphData, setPolicyGraphData] = useState([]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const getAllLeadData = async () => {
    const response = await getApi(userRole === 'admin' ? `lead/list` : `lead/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setLeadData(response?.data?.count);
    }
  };

  const getAllContactData = async () => {
    const response = await getApi(userRole === 'admin' ? `contact/list` : `contact/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setContactList(response?.data?.count);
    }
  };

  const getAllPolicyData = async () => {
    const response = await getApi(userRole === 'admin' ? `policy/list` : `policy/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setPolicyList(response?.data?.count);
    }
  };

  const getAllTaskData = async () => {
    const response = await getApi(userRole === 'admin' ? `task/list` : `task/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setTaskList(response?.data?.count);
      setTaskData(response?.data?.taskAllData);
    }
  };

  const getAllMeetingData = async () => {
    const response = await getApi(userRole === 'admin' ? `meeting/list` : `meeting/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setMeetingData(response?.data?.count);
    }
  };

  const getAllCallData = async () => {
    const response = await getApi(userRole === 'admin' ? `call/list` : `call/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setCallData(response?.data?.count);
    }
  };

  // delete api
  const deleteTaskData = async (id) => {
    await deleteApi(`task/delete/${id}`);
  };

  const getAllConversationData = async () => {
    const response = await getApi(userRole === 'admin' ? `lead/conversation` : `lead/conversation/?createdBy=${userid}`);
    return response?.data?.conversationData.map((item) => ({
      label: item._id,
      value: item.count
    }));
  };

  const getAllLeadGraphData = async () => {
    try {
      const [conversionLead] = await Promise.all([getAllConversationData()]);
      const combinedData = [...conversionLead];
      setConversationData(combinedData);
    } catch (error) {
      console.error('Error fetching conversionLead data', error);
    }
  };

  const getAllEmailData = async () => {
    const response = await getApi(userRole === 'admin' ? `email/list` : `email/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setEmailData(response?.data?.allEmailData);
    }
  };

  const getAllDocumentData = async () => {
    const response = await getApi(userRole === 'admin' ? `document/list` : `document/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setDocumentData(response?.data?.allDocumentData);
    }
  };

  const getAllEmailTemplatesData = async () => {
    const response = await getApi(userRole === 'admin' ? `emailtemplate/list` : `emailtemplate/list/?createdBy=${userid}`);
    if (response && response.status === 200) {
      setTemplatesData(response?.data?.allTemplatesData);
    }
  };

  const getAllPolicyGraphData = async () => {
    const resultPolicyGraph = await getApi(userRole === 'admin' ? `policy/policyGraph` : `policy/policyGraph/?createdBy=${userid}`);
    if (resultPolicyGraph && resultPolicyGraph.status === 200) {
      setPolicyGraphData(resultPolicyGraph?.data?.policyData);
    }
  };

  const getAllTaskCalenderData = async () => {
    const resultTask = await getApi(userRole === 'admin' ? `task/list` : `task/list/?createdBy=${userid}`);
    return resultTask.data.taskAllData.map((item) => ({
      title: item.subject,
      start: item.startDate,
      end: item.endDate,
      textColor: item.textColor,
      backgroundColor: item.backgroundColor
    }));
  };
  const getAllMeetingCalenderData = async () => {
    const resultMeeting = await getApi(userRole === 'admin' ? `meeting/list` : `meeting/list/?createdBy=${userid}`);
    return resultMeeting.data.allMeetingData.map((item) => ({
      title: item.subject,
      start: item.startDate,
      end: item.endDate
    }));
  };

  const getAllCallCalenderData = async () => {
    const resultCall = await getApi(userRole === 'admin' ? `call/list` : `call/list/?createdBy=${userid}`);
    return resultCall.data.allCallData.map((item) => ({
      title: item.subject,
      start: item.startDateTime
    }));
  };

  const getAllCalenderData = async () => {
    try {
      const [taskApiData, meetingApiData, callApiData] = await Promise.all([
        getAllTaskCalenderData(),
        getAllMeetingCalenderData(),
        getAllCallCalenderData()
      ]);
      const combinedData = [...taskApiData, ...meetingApiData, ...callApiData];
      setCalenderData(combinedData);
    } catch (error) {
      console.error('Error fetching calendar data', error);
    }
  };

  useEffect(() => {
    getAllLeadData();
    getAllContactData();
    getAllPolicyData();
    getAllTaskData();
    getAllMeetingData();
    getAllCallData();
    getAllLeadGraphData();
    getAllEmailData();
    getAllEmailTemplatesData();
    getAllDocumentData();
    getAllCalenderData();
    getAllPolicyGraphData();
    // eslint-disable-next-line
  }, []);

  const currentVisitorGraph = [
    { label: 'Lead', value: leadData },
    { label: 'Call', value: callData },
    { label: 'Task', value: taskList },
    { label: 'Meeting', value: meetingData }
  ];

  const trafficVisitorGraph = [
    {
      name: 'Email',
      value: emailData.length === 0 ? 0 : emailData.length,
      icon: <Iconify icon={'eva:email-fill'} color="#409ae9" width={32} />
    },
    {
      name: 'Events',
      value: calenderData.length === 0 ? 0 : calenderData.length,
      icon: <Iconify icon={'eva:file-fill'} color="#409ae9" width={32} />
    },
    {
      name: 'Documents',
      value: documentData.length === 0 ? 0 : documentData.length,
      icon: <Iconify icon={'eva:file-fill'} color="#409ae9" width={32} />
    },
    {
      name: 'Templates',
      value: templatesData.length === 0 ? 0 : templatesData.length,
      icon: <Iconify icon={'eva:home-fill'} color="#409ae9" width={32} />
    }
  ];

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalLeadsCard isLoading={isLoading} leadData={leadData} />
          </Grid>

          <Grid item sm={6} xs={12} md={6} lg={3}>
            <PoliciesCard isLoading={isLoading} policyList={policyList} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalContactCard isLoading={isLoading} contactList={contactList} />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={3}>
            <TotalTaskCard isLoading={isLoading} taskList={taskList} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} policyList={policyList} policyGraphData={policyGraphData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} calenderData={calenderData} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6} lg={6}>
            <AppConversionRates title="Conversation Leads" subheader="Follow-up of Lead" chartData={conversationData} />
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <AppCurrentVisits
              title="Current Targets"
              chartData={currentVisitorGraph}
              chartColors={[theme.palette.primary.main, theme.palette.info.main, theme.palette.warning.main, theme.palette.error.main]}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6} lg={5}>
            <AppTrafficBySite title="Total Details" list={trafficVisitorGraph} />
          </Grid>
          <Grid item xs={12} md={7}>
            <AppTasks title="Tasks" list={taskData} deleteTaskData={deleteTaskData} getAllTaskData={getAllTaskData} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
