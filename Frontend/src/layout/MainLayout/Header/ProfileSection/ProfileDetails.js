// material-ui
import { Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../ui-component/Header';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Palette from '../../../../ui-component/ThemePalette';

// ==============================|| PROFILE MENU - PROFILE CARD ||============================== //

const ProfileDetails = () => {
  const userRole = localStorage.getItem('userRole');
  const userData = localStorage.getItem('user');
  const user = JSON.parse(userData);

  const navigate = useNavigate();
  const handleProfileBack = () => {
    if (userRole === 'admin') {
      navigate('/adminDashboard/home');
    } else {
      navigate('/dashboard/app');
    }
  };

  return (
    <>
      <Container>
        <Grid container display="flex" alignItems="center">
          <Stack direction="row" alignItems="center" mb={3} justifyContent={'space-between'} width={'100%'}>
            <Header title="Profile Details" />
            <Stack direction="row" alignItems="center" justifyContent={'flex-end'}>
              <Button variant="contained" color="primary" startIcon={<ArrowBackIosIcon />} onClick={handleProfileBack}>
                Back
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Box sx={{ width: '100%' }}>
          <Card style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>
            <Box p={3}>
              <Grid container display="flex" spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} pb={2}>
                    <Typography variant="body1">Name </Typography>
                    <Typography variant="body2" color={Palette.grey[600]}>
                      {user ? `${user.firstName} ${user.lastName}` : '-'}
                    </Typography>
                  </Grid>
                  <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} py={2}>
                    <Typography variant="body1">Role </Typography>
                    <Typography variant="body2" color={Palette.grey[600]}>
                      {user.role ? user.role : '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} pb={2}>
                    <Typography variant="body1">Email</Typography>
                    <Typography variant="body2" color={Palette.grey[600]}>
                      {user.emailAddress ? user.emailAddress : '-'}
                    </Typography>
                  </Grid>
                  <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} py={2}>
                    <Typography variant="body1">Created Date&Time </Typography>
                    <Typography variant="body2" color={Palette.grey[600]}>
                      {new Date(user.createdOn).toLocaleString(undefined, {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default ProfileDetails;
