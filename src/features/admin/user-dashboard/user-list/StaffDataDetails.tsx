import {Box, Typography, useTheme} from '@mui/material';
import {StaffDetails} from "../../../../shared/models/user.types.ts";

interface EmployeeDataDetailsProps {
  staffData: StaffDetails;
}

const StaffDataDetails = ({staffData}: EmployeeDataDetailsProps) => {
  const theme = useTheme();

  console.log(staffData.beginWorkingHour)

  return (
    <Box mt={2} p={2} border={`1px solid ${theme.palette.divider}`} borderRadius={2} bgcolor={theme.palette.background.paper}>
      <Typography variant={"body2"} fontWeight="bold">Salary: <span
        style={{fontWeight: 'normal'}}>{staffData.salary}</span></Typography>
      <Typography variant={"body2"} fontWeight="bold">Profit: <span
        style={{fontWeight: 'normal'}}>{staffData.profit}</span></Typography>
      <Typography variant={"body2"} fontWeight="bold">Completed Appointments: <span
        style={{fontWeight: 'normal'}}>{staffData.completedAppointments}</span></Typography>
      <Typography variant={"body2"} fontWeight="bold">Experience: <span
        style={{fontWeight: 'normal'}}>{staffData.experience} years</span></Typography>
      <Typography variant={"body2"} fontWeight="bold">Working Hours: <span
        style={{fontWeight: 'normal'}}>{staffData.beginWorkingHour.toString()} - {staffData.endWorkingHour.toString()}</span></Typography>
    </Box>
  );
};

export default StaffDataDetails;