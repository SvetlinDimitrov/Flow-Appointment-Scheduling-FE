import {Box, Typography} from "@mui/material";
import {Appointment} from "../../../../../shared/models/appointment.types.ts";

interface AppointmentItemProps {
  appointment: Appointment;
  isLast: boolean;
  onCancel: () => void;
  onViewMore: () => void;
}

const AppointmentItem = ({isLast, appointment, onCancel, onViewMore}: AppointmentItemProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'} gap={1}
         width={'100%'}
         p={1} borderBottom={isLast ? 'none' : 'inherit'}>
      <Box justifyContent={'center'} alignItems={'center'} display={'flex'}
           sx={{
             flexDirection: {
               xs: 'column',
               sm: 'row'
             },
             gap:{
               xs: 1,
               sm: 2
             }
           }}>
        <Typography textAlign={'center'} variant="h6" color="textSecondary" sx={{
          fontWeight: 'bold',
          fontSize: {
            xs: '0.9rem',
            sm: '1.1rem'
          }
        }}>
          {appointment.service.name}
        </Typography>
        <Typography textAlign={'center'} variant="h6" color="textSecondary" sx={{
          fontWeight: 'bold',
          fontSize: {
            xs: '0.9rem',
            sm: '1.1rem'
          }
        }}>
          {appointment.date.toLocaleString()}
        </Typography>
      </Box>
      <Box display={'flex'} gap={2}>
        <Typography
          variant="body2"
          color="primary"
          sx={{cursor: 'pointer'}}
          onClick={onCancel}
        >
          Cancel
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{cursor: 'pointer'}}
          onClick={onViewMore}
        >
          View More
        </Typography>
      </Box>
    </Box>
  );
};

export default AppointmentItem;