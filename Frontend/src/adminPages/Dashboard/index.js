import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import TotalContactCard from './TotalContactCard';
import AllUsersCard from './AllUsersCard';
import TotalLeadsCard from './TotalLeadsCard';
import PoliciesCard from './TotalPoliciesCard';
import TotalUserCard from './TotalUsersCard';
import TotalUsersGrowthChart from './TotalUsersGrowthChart';
import { gridSpacing } from 'store/constant';
import { getApi } from '../../service/api';

// ==============================|| ADMIN DASHBOARD ||============================== //

const Dashboard = () => {
  const user_id = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const [isLoading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const [leadsData, setLeadsData] = useState([]);
  const [contactsData, setContactsData] = useState([]);
  const [policyData, setPolicyData] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const getAllUsersData = async () => {
    const response = await getApi(userRole === 'admin' ? `user/list` : `user/list/?createdBy=${user_id}`);
    if (response && response.status === 200) {
      setUsersData(response?.data?.result);
    }
  };

  const getAllLeadsData = async () => {
    const response = await getApi(userRole === 'admin' ? `lead/totalLead` : `lead/totalLead/?createdBy=${user_id}`);
    if (response && response.status === 200) {
      setLeadsData(response?.data?.allLead);
    }
  };

  const getAllContactsData = async () => {
    const response = await getApi(userRole === 'admin' ? `contact/totalContact` : `contact/totalContact/?createdBy=${user_id}`);
    if (response && response.status === 200) {
      setContactsData(response?.data?.allContactData);
    }
  };

  const getAllPolicyData = async () => {
    const response = await getApi(userRole === 'admin' ? `policy/totalPolicy` : `policy/totalPolicy/?createdBy=${user_id}`);
    if (response && response.status === 200) {
      setPolicyData(response?.data?.allPolicyData);
    }
  };

  const getUsersGraphData = async () => {
    const response = await getApi(userRole === 'admin' ? `user/totalUsers` : `user/totalUsers/?createdBy=${user_id}`);
    if (response && response.status === 200) {
      setGraphData(response?.data?.monthWiseCounts);
    }
  };

  useEffect(() => {
    getAllUsersData();
    getAllLeadsData();
    getUsersGraphData();
    getAllContactsData();
    getAllPolicyData();
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalLeadsCard isLoading={isLoading} leadsData={leadsData} />
          </Grid>

          <Grid item sm={6} xs={12} md={6} lg={3}>
            <PoliciesCard isLoading={isLoading} policyData={policyData} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalContactCard isLoading={isLoading} contactsData={contactsData} />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={3}>
            <TotalUserCard isLoading={isLoading} usersData={usersData} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalUsersGrowthChart isLoading={isLoading} graphData={graphData} usersData={usersData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AllUsersCard isLoading={isLoading} usersData={usersData} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
