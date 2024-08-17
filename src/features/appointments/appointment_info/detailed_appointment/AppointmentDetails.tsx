import {Box} from '@mui/material';
import {styled} from '@mui/system';
import HeaderAppointmentSection from './header/HeaderAppointmentSection.tsx';
import UserInfoSection from './user_info/UserInfoSection.tsx';
import MapSection from './map/MapSection.tsx';
import ServiceDetailSection from './service_detail/ServiceDetailSection.tsx';
import {Appointment} from "../../../../models/appointment.types.ts";

const appointmentDummyData: Appointment = {
  id: 1,
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
  return (
    <CenteredBox>
      <HeaderAppointmentSection appointment={appointmentDummyData}/>
      <Box display={'flex'} width={'802px'} height={'80%'}>
        <Box display={'flex'} flexDirection={'column'} width={'400px'}>
          {/*based on the role choose the client or employee*/}
          <UserInfoSection user={appointmentDummyData.client}/>
          <Box height={'60%'} display={'flex'} alignItems={'center'} border={'1px solid black'}>
            <MapSection/>
          </Box>
        </Box>
        <Box flexGrow={1} border={'1px solid black'}>
          <ServiceDetailSection service={appointmentDummyData.service}/>
        </Box>
      </Box>
    </CenteredBox>
  );
};

export default DetailedAppointment;