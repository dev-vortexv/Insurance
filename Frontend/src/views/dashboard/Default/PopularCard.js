import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Button, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports

import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading, calenderData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 7; // Number of cards to display per page

  // Calculate index range of cards to display for the current page
  const indexOfLastUser = currentPage * dataPerPage;
  const indexOfFirstUser = indexOfLastUser - dataPerPage;
  const currentUsersData = calenderData.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const handlePagination = () => {
    if (currentPage === Math.ceil(calenderData.length / dataPerPage)) {
      // If on the last page, move to the previous page
      setCurrentPage(currentPage - 1);
    } else {
      // If not on the last page, move to the next page
      setCurrentPage(currentPage + 1);
    }
  };

  function getButtonLabel(calenderData, currentPage, dataPerPage) {
    if (calenderData.length <= currentPage * dataPerPage) {
      return 'View All';
    } else if (currentPage === Math.ceil(calenderData.length / dataPerPage)) {
      return 'Previous';
    } else {
      return 'View All';
    }
  }

  const getDateTime = (dateString) => {
    const date = new Date(dateString);
    // Get the date in yyyy-mm-dd format
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${day}-${month}-${year}`;

    // Get the time in hh:mm:ss format
    let hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    let period = ''; // Initialize period variable

    // Determine AM or PM based on hours
    if (hours >= 12) {
      period = 'PM';
      if (hours > 12) {
        hours -= 12;
      }
    } else {
      // eslint-disable-next-line no-unused-vars
      period = 'AM';
    }

    // Ensure midnight is displayed as 12 AM
    if (hours === 0) {
      hours = 12;
    }

    const formattedTime = `${hours}:${minutes} ${period}`;

    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Upcoming Events</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {currentUsersData.map((item, index) => {
                  return (
                    <>
                      <Grid container alignItems="center" justifyContent="space-between" key={index}>
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid container direction="column">
                              <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                  Date & Time
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle2" color="inherit">
                                  {getDateTime(item.start)}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Divider sx={{ my: 1.5 }} />
                    </>
                  );
                })}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
              <Button size="small" disableElevation onClick={() => handlePagination()}>
                {getButtonLabel(calenderData, currentPage, dataPerPage)}
              </Button>
            </CardActions>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool,
  calenderData: PropTypes.array
};

export default PopularCard;
