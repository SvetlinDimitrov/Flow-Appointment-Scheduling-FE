import {Box, Button, Typography} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {styled} from '@mui/system';

const CenteredBox = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  textAlign: 'center',
  width: '100%',
  maxWidth: 500,
  height: 300,
  gap: theme.spacing(8)
}));

const AppointmentEmpty = () => {
  return (
    <CenteredBox>
      <CalendarTodayIcon fontSize={"inherit"} sx={{fontSize: 90}}/>
      <Box display={'flex'} flexDirection={'column'}
           justifyContent={'center'} alignItems={'center'} gap={3}>
        <Typography textAlign={'center'} variant={"h6"} color={"textSecondary"} fontWeight={'bold'}>
          There are no future appointments.
        </Typography>
        <Typography textAlign={'center'} variant={"body1"} color={"textSecondary"} fontSize={"1.1rem"}>
          Choose an appointment with one of our specialists and book an appointment.
        </Typography>
        <Button variant={"contained"} color={"primary"} sx={{maxWidth: '200px', boxShadow: 3}}>
          Book
        </Button>
      </Box>
    </CenteredBox>
  );
};

export default AppointmentEmpty;