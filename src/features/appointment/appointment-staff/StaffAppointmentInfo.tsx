import {useContext} from "react";
import {Box, Typography} from "@mui/material";
import MyCalendar from "../../../shared/core/calendar/MyCalendar.tsx";
import StaffCustomToolbar from "./calendar-toolbars/StaffCustomToolbar.tsx";
import {UserAuthContext} from "../../../shared/context/UserAuthContext.tsx";
import {CalendarType, FetchType} from "../../../shared/models/react-big-calendar.ts";

const StaffAppointmentInfo = () => {
  const {userId} = useContext(UserAuthContext)!;

  if(!userId) return null;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="86.1vh"
      >
        <Typography variant="h5" mb={5}>
          My Appointments
        </Typography>
        <MyCalendar
          calendarType={CalendarType.STAFF}
          CustomToolbar={StaffCustomToolbar}
          fetchId={userId}
          fetchType={FetchType.USER}
          width="90%"
          height="80%"
          startDate={undefined}
          endDate={undefined}
        />
      </Box>

    </>
  );
};

export default StaffAppointmentInfo;