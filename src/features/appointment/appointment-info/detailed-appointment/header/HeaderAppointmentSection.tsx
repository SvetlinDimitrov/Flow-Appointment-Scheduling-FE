import {Box, Button, Typography} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {styled} from '@mui/system';
import {Appointment} from "../../../../../shared/models/appointment.types.ts";

const CalendarIconContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: '#eeeeee',
  marginLeft: theme.spacing(2),
}));

interface HeaderAppointmentSectionProps {
  appointment: Appointment;
  cancelAppointment: () => void;
}

const HeaderAppointmentSection = ({appointment, cancelAppointment}: HeaderAppointmentSectionProps) => {
  const date = appointment.date;
  const day = date.toLocaleString('en-US', {weekday: 'long'});
  const month = date.toLocaleString('en-US', {month: 'long'});
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  return (
    <Box width={'800px'} height={'20%'} display={'flex'}
         alignItems={'center'} border={'1px solid black'}>
      <CalendarIconContainer>
        <CalendarTodayIcon fontSize="large"/>
      </CalendarIconContainer>
      <Box display={'flex'} flexDirection={'column'} ml={2}>
        <Typography variant="h6" fontSize={24} fontWeight={'bold'} mb={2}>
          Scheduled appointment for
        </Typography>
        <Typography variant="body1" fontSize={20} fontWeight={'italic'}>
          {`${day}, ${dayOfMonth} ${month}, ${year}`}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={cancelAppointment}
        sx={{marginLeft: 'auto', marginRight: 2}}
      >
        Cancel Appointment
      </Button>
    </Box>
  );
};

export default HeaderAppointmentSection;