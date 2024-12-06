/* eslint-disable react/prop-types */
import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import moment from 'moment';
import Palette from '../../../ui-component/ThemePalette';

// eslint-disable-next-line arrow-body-style
const Overview = ({ data }) => {
  return (
    <div>
      <Card style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>
        <Box p={3}>
          <Grid container display="flex" spacing={4}>
            <Grid item xs={12} sm={6}>
              <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} pb={2}>
                <Typography variant="body1">Subject :</Typography>
                <Typography variant="body2" color={Palette.grey[600]} textTransform={'capitalize'}>
                  {data?.subject ? data?.subject : '--'}
                </Typography>
              </Grid>
              <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} py={2}>
                <Typography variant="body1">Start Date :</Typography>
                <Typography variant="body2" color={Palette.grey[600]}>
                  {data?.startDate ? moment(data?.startDate).format('lll') : '--'}
                </Typography>
              </Grid>
              <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} py={2}>
                <Typography variant="body1">Duration :</Typography>
                <Typography variant="body2" color={Palette.grey[600]}>
                  {data?.duration ? data?.duration : '--'}
                </Typography>
              </Grid>
              <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} py={2}>
                <Typography variant="body1">Meeting Note :</Typography>
                <Typography variant="body2" color={Palette.grey[600]}>
                  {data?.note ? data?.note : '--'}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} pb={2}>
                <Typography variant="body1">Status :</Typography>
                <Typography variant="body2" color={Palette.grey[600]}>
                  {data?.status ? data?.status : '--'}
                </Typography>
              </Grid>
              <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} py={2}>
                <Typography variant="body1">End Date :</Typography>
                <Typography variant="body2" color={Palette.grey[600]}>
                  {data?.endDate ? moment(data?.endDate).format('lll') : '--'}
                </Typography>
              </Grid>
              <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} py={2}>
                <Typography variant="body1">Meeting Location :</Typography>
                <Typography variant="body2" color={Palette.grey[600]} textTransform={'capitalize'}>
                  {data?.location ? data?.location : '--'}
                </Typography>
              </Grid>
              {
                <Grid style={{ borderBottom: '1.5px dashed', borderBottomColor: Palette.grey[400] }} py={2}>
                  <Typography variant="body1">Related To {data?.lead_id?._id ? 'Lead' : 'Contact'} :</Typography>
                  {data?.relatedTo === 'Lead' ? (
                    <Typography
                      variant="body2"
                      color={Palette.primary.main}
                      textTransform={'capitalize'}
                    >{`${data?.createdBy?.firstName} ${data?.createdBy?.lastName}`}</Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color={Palette.primary.main}
                      textTransform={'capitalize'}
                    >{`${data?.createdBy?.firstName} ${data?.createdBy?.lastName}`}</Typography>
                  )}
                </Grid>
              }
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
};

export default Overview;
