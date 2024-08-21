import {Box} from '@mui/material';
import {styled} from '@mui/system';
import HeaderAppointmentSection from './header/HeaderAppointmentSection.tsx';
import UserInfoSection from './user-info/UserInfoSection.tsx';
import MapSection from './map/MapSection.tsx';
import ServiceDetailSection from './service-detail/ServiceDetailSection.tsx';
import {Appointment} from "../../../../shared/models/appointment.types.ts";
import {UserRole} from "../../../../shared/models/user.types.ts";

const appointmentDummyData: Appointment = {
  id: 1,
  client: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: UserRole.CLIENT,
    employeeData: null,
    id: 1,
  },
  employee: {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: null,
    id: 2,
  },
  date: new Date(),
  service: {
    id: 1,
    name: "Consultation",
    price: 100,
    description: "A detailed consultation service.",
    duration: 60,
    place: {
      name: "Office 101",
      capacity: 5,
    },
  }
}

const CenteredBox = styled(Box)(({theme}) => ({
  display: 'flex',
  margin: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  height: '500px',
  width: '800px',
  padding: theme.spacing(4),
  backgroundColor: 'white',
  borderRadius: '10px',
}));

// @ts-ignore
const DetailedAppointment = () => {

  const cancelAppointment = () => {
    console.log(appointmentDummyData);
  }

  const bookAgain = () => {
    console.log(appointmentDummyData);
  }

  return (
    <CenteredBox>
      <HeaderAppointmentSection appointment={appointmentDummyData} cancelAppointment={cancelAppointment}/>
      <Box display={'flex'} width={'802px'} height={'80%'}>
        <Box display={'flex'} flexDirection={'column'} width={'400px'}>
          {/*based on the role choose the client or employee*/}
          <UserInfoSection user={appointmentDummyData.client}/>
          <Box height={'60%'} display={'flex'} alignItems={'center'} border={'1px solid black'}>
            <MapSection/>
          </Box>
        </Box>
        <Box flexGrow={1} border={'1px solid black'}>
          <ServiceDetailSection service={appointmentDummyData.service} bookAgain={bookAgain}/>
        </Box>
      </Box>
    </CenteredBox>
  );
};

export default DetailedAppointment;