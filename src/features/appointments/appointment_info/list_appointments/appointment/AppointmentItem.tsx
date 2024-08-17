import { Box, Typography } from "@mui/material";
import { Appointment } from "../../../../../models/appointment.types.ts";

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
         key={index} p={1} borderBottom={index === currentAppointments.length - 1 ? 'none' : 'inherit'}
         width={'100%'}>
      <Typography textAlign={'center'} variant="h6" color="textSecondary" sx={{fontWeight: 'bold'}}>
        {`${appointment.service.name} - ${appointment.date.toLocaleString()}`}
      </Typography>
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