import {Box} from '@mui/material';
import {styled} from '@mui/system';
import HeaderAppointmentSection from './header/HeaderAppointmentSection.tsx';
import UserInfoSection from './user_info/UserInfoSection.tsx';
import MapSection from './map/MapSection.tsx';
import ServiceDetailSection from './service_detail/ServiceDetailSection.tsx';
import {User} from "../../../../models/user.types.ts";
import {Service} from "../../../../models/service.types.ts";

interface DetailedAppointmentProps {
  client: User;
  employee: User;
  date: Date;
  service: Service;
}

const CenteredBox = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '500px',
  width: '800px',
  padding: theme.spacing(4),
  backgroundColor: 'white',
  borderRadius: '10px',
}));

// @ts-ignore
const DetailedAppointment = ({client, employee, date, service}: DetailedAppointmentProps) => {
  return (
    <CenteredBox>
      <HeaderAppointmentSection date={date}/>
      <Box display={'flex'} width={'802px'} height={'80%'}>
        <Box display={'flex'} flexDirection={'column'} width={'400px'}>
          {/*based on the role choose the client or employee*/}
          <UserInfoSection user={client}/>
          <Box height={'60%'} display={'flex'} alignItems={'center'} border={'1px solid black'}>
            <MapSection/>
          </Box>
        </Box>
        <Box flexGrow={1} border={'1px solid black'}>
          <ServiceDetailSection service={service}/>
        </Box>
      </Box>
    </CenteredBox>
  );
};

export default DetailedAppointment;