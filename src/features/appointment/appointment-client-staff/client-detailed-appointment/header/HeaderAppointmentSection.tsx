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

  const startDate = new Date(appointment.startDate);
  const endDate = new Date(appointment.endDate);

  const day = startDate.toLocaleString('default', {weekday: 'long'});
  const dayOfMonth = startDate.getDate();
  const month = startDate.toLocaleString('default', {month: 'long'});
  const year = startDate.getFullYear();
  const startTime = startDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  const endTime = endDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  return (
    <Box display={'flex'} alignItems={'center'} gap={1} p={1}
         justifyContent={'space-around'} sx={{
      flexDirection: {
        sm: 'row',
        xs: 'column'
      }
    }}>
      <CalendarIconContainer sx={{
        display: {
          sm: 'flex',
          xs: 'none',
        }
      }}>
        <CalendarTodayIcon fontSize="large"/>
      </CalendarIconContainer>
      <Box display={'flex'} flexDirection={'column'}>
        <Typography variant="h5" fontWeight={'bold'} mb={2} textAlign={'center'}>
          Scheduled appointment for
        </Typography>
        <Typography variant="subtitle2" textAlign={'center'}>
          {`${day}, ${dayOfMonth} ${month}, ${year} from ${startTime} to ${endTime}`}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={cancelAppointment}
        aria-hidden={false}
        sx={{
          marginLeft: 'auto',
          marginRight: 2,
          margin: {
            sm: 0,
            xs: 'auto'
          }
        }}
          size={'small'}
      >
          Cancel
      </Button>
    </Box>
  );
};

export default HeaderAppointmentSection;