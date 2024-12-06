/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// @mui
import { Stack, Container, Typography, Box } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ActionCalenderDropDown from './ActionCalenderDropDown';
import AddTask from 'views/Task/AddTask';
import AddCalls from 'views/Calls/Addcalls';
import AddMeetings from 'views/Metting/Addmeetings';
import { getApi, postApi } from '../../service/api';

// ----------------------------------------------------------------------
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
//const events = [{ title: 'Meeting Time', start: new Date() }];

const Calender = () => {
  const userid = localStorage.getItem('user_id');
  const userRole = localStorage.getItem('userRole');

  const [openTask, setOpenTask] = useState(false);
  const [openMeeting, setOpenMeeting] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [data, setData] = useState([]);

  // open task model
  const handleOpenTask = () => setOpenTask(true);
  const handleCloseTask = () => setOpenTask(false);

  // open meeting model
  const handleOpenMeeting = () => setOpenMeeting(true);
  const handleCloseMeeting = () => setOpenMeeting(false);

  // open call model
  const handleOpenCall = () => setOpenCall(true);
  const handleCloseCall = () => setOpenCall(false);

  const getAllTaskData = async () => {
    const resultTask = await getApi(userRole === 'admin' ? `task/list` : `task/list/?createdBy=${userid}`);
    return resultTask.data.taskAllData.map((item) => ({
      title: item.subject,
      start: item.startDate,
      end: item.endDate,
      textColor: item.textColor,
      backgroundColor: item.backgroundColor
    }));
  };
  const getAllMeetingData = async () => {
    const resultMeeting = await getApi(userRole === 'admin' ? `meeting/list` : `meeting/list/?createdBy=${userid}`);
    return resultMeeting.data.allMeetingData.map((item) => ({
      title: item.subject,
      start: item.startDate,
      end: item.endDate
    }));
  };

  const getAllCallData = async () => {
    const resultCall = await getApi(userRole === 'admin' ? `call/list` : `call/list/?createdBy=${userid}`);
    return resultCall.data.allCallData.map((item) => ({
      title: item.subject,
      start: item.startDateTime
    }));
  };

  const getAllCalenderData = async () => {
    try {
      const [taskApiData, meetingApiData, callApiData] = await Promise.all([getAllTaskData(), getAllMeetingData(), getAllCallData()]);
      const combinedData = [...taskApiData, ...meetingApiData, ...callApiData];
      setData(combinedData);
    } catch (error) {
      console.error('Error fetching calendar data', error);
    }
  };

  useEffect(() => {
    getAllCalenderData();
  }, []);

  const addCall = async (values) => {
    const data = values;
    const result = await postApi('call/add', data);
    if (result && result.status === 201) {
      getAllCalenderData();
    }
  };

  const addMeeting = async (values) => {
    const data = values;
    const result = await postApi('meeting/add', data);
    if (result && result.status === 201) {
      getAllCalenderData();
    }
  };

  const addTask = async (values) => {
    const data = values;
    const result = await postApi('task/add', data);
    if (result && result.status === 201) {
      getAllCalenderData();
    }
  };

  return (
    <>
      {/* Add Task Model */}
      <AddTask open={openTask} handleClose={handleCloseTask} addTask={addTask} />

      {/* Add Meeting Model */}
      <AddMeetings open={openMeeting} handleClose={handleCloseMeeting} addMeeting={addMeeting} />

      {/* Add Call Model */}
      <AddCalls open={openCall} handleClose={handleCloseCall} addCall={addCall} />
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Calender</Typography>
          <ActionCalenderDropDown handleOpenTask={handleOpenTask} handleOpenMeeting={handleOpenMeeting} handleOpenCall={handleOpenCall} />
        </Stack>
        <Box sx={{ background: 'white' }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            minHeight="400px"
            height="600px"
            //weekends={false}
            events={data}
            eventContent={renderEventContent}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            views={{
              listWeek: { buttonText: 'List' },
              multiMonthFourMonth: {
                type: 'multiMonth',
                buttonText: 'multiMonth',
                duration: { months: 4 }
              }
            }}
            buttonText={{
              today: 'Today',
              dayGridMonth: 'Month',
              timeGridWeek: 'Week',
              timeGridDay: 'Day'
            }}
            eventClassNames="custom-fullcalendar"
          />
        </Box>
      </Container>
    </>
  );
};

export default Calender;
