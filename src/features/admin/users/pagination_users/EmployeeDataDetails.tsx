import { Box, Typography, useTheme } from '@mui/material';
import {EmployeeData} from "../../../../models/user.types.ts";

interface EmployeeDataDetailsProps {
  employeeData: EmployeeData;
}

const EmployeeDataDetails = ({ employeeData }: EmployeeDataDetailsProps) => {
  const theme = useTheme();
  return (
    <Box mt={2} p={2} border={`1px solid ${theme.palette.divider}`} borderRadius={2} bgcolor={theme.palette.background.paper}>
      <Typography variant={"body2"} fontWeight="bold">Salary: <span style={{ fontWeight: 'normal' }}>{employeeData.salary}</span></Typography>
      <Typography variant={"body2"} fontWeight="bold">Profit: <span style={{ fontWeight: 'normal' }}>{employeeData.profit}</span></Typography>
      <Typography variant={"body2"} fontWeight="bold">Completed Appointments: <span style={{ fontWeight: 'normal' }}>{employeeData.completedAppointments}</span></Typography>
      <Typography variant={"body2"} fontWeight="bold">Experience: <span style={{ fontWeight: 'normal' }}>{employeeData.experience} years</span></Typography>
      <Typography variant={"body2"} fontWeight="bold">Working Hours: <span style={{ fontWeight: 'normal' }}>{employeeData.beginWorkingHour.toLocaleTimeString()} - {employeeData.endWorkingHour.toLocaleTimeString()}</span></Typography>
    </Box>
  );
};

export default EmployeeDataDetails;