import {Box, Typography} from '@mui/material';
import AppointmentEmpty from "./empty_appoinment/AppointmentEmpty.tsx";
import DetailedAppointment from "./detailed_appointment/AppointmentDetails.tsx";

const AppointmentInfo = () => {

  const appointmentDetails = {
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: "client",
      id: 1,
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: "employee",
      id: 2,
    },
    date: new Date(),
    service: {
      id: 1,
      name: "Consultation",
      description: "A detailed consultation service.",
      duration: 60,
      place: {
        name: "Office 101",
        capacity: 5,
      },
    },
  };

  return (
    <Box display="flex" flexDirection="column"
         alignItems="center" justifyContent="center" height="86.1vh">
      <Typography variant="h4" gutterBottom>
        My Feature Appointments
      </Typography>
      {appointmentDetails ? (
        <DetailedAppointment {...appointmentDetails} />
      ) : (
        <AppointmentEmpty/>
      )}
    </Box>
  );
};

export default AppointmentInfo;