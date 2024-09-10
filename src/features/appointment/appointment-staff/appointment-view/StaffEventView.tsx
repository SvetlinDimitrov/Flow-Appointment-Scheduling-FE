import {
  Box,
  Button, Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import {AccessTime, Build, Email, Person} from '@mui/icons-material';
import {Appointment, AppointmentStatus, UpdateAppointmentStatus} from "../../../../shared/models/appointment.types.ts";

interface StaffEventViewProps {
  open: boolean;
  onClose: () => void;
  appointment: Appointment;
  onAppointmentUpdate: (status: UpdateAppointmentStatus) => void;
}

export const formatAppointmentDate = (appointment: Appointment): string => {
  const startDate = new Date(appointment.startDate);
  const endDate = new Date(appointment.endDate);

  const day = startDate.toLocaleString('default', {weekday: 'long'});
  const dayOfMonth = startDate.getDate();
  const month = startDate.toLocaleString('default', {month: 'long'});
  const year = startDate.getFullYear();
  const startTime = startDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  const endTime = endDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  return `${day}, ${dayOfMonth} ${month}, ${year} from ${startTime} to ${endTime}`;
};

const StaffEventView = ({open, onClose, appointment, onAppointmentUpdate}: StaffEventViewProps) => {
  const {status, service, client} = appointment;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box minWidth={300}>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">Appointment Information</Typography>
            <Chip size={'small'} label={`Status: ${status}`} color="primary" variant="outlined"/>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <Build/>
                </ListItemIcon>
                <ListItemText primary="Service" secondary={service.name}/>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <AccessTime/>
                </ListItemIcon>
                <ListItemText primary="Time" secondary={formatAppointmentDate(appointment)}/>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary="Client" secondary={`${client.firstName} ${client.lastName}`}/>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <Email/>
                </ListItemIcon>
                <ListItemText primary="Email" secondary={client.email}/>
              </ListItem>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {status === AppointmentStatus.NOT_APPROVED && (
            <>
              <Button variant={'outlined'}
                      size={'small'}
                      onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.APPROVED)}
                      color="primary">Approve Appointment</Button>
              <Button variant={'outlined'}
                      size={'small'}
                      onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.CANCELED)}
                      color="secondary">Cancel Appointment</Button>
            </>
          )}
          {status === AppointmentStatus.APPROVED && (
            <>
              <Button variant={'outlined'}
                      size={'small'}
                      onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.COMPLETED)}
                      color="primary">Complete Appointment</Button>
              <Button variant={'outlined'}
                      size={'small'}
                      onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.CANCELED)}
                      color="secondary">Cancel Appointment</Button>
            </>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default StaffEventView;