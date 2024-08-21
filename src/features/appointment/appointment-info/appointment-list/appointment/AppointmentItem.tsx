import {Box, Typography} from "@mui/material";
import {Appointment} from "../../../../../shared/models/appointment.types.ts";

interface AppointmentItemProps {
  appointment: Appointment;
  index: number;
  currentAppointments: Appointment[];
  onCancel: (appointment: Appointment) => void;
  onViewMore: (appointment: Appointment) => void;
}

const AppointmentItem = ({ appointment, index, currentAppointments, onCancel, onViewMore }: AppointmentItemProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'} gap={1}
         width={'100%'}
         key={index} p={1} borderBottom={index === currentAppointments.length - 1 ? 'none' : 'inherit'}>
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
          onClick={() => onCancel(appointment)}
        >
          Cancel
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{cursor: 'pointer'}}
          onClick={() => onViewMore(appointment)}
        >
          View More
        </Typography>
      </Box>
    </Box>
  );
};

export default AppointmentItem;