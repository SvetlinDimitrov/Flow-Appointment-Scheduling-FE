import {
  Box,
  Button,
  Chip,
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
import {Appointment, AppointmentStatus, UpdateAppointmentStatus} from "../../../../../shared/models/appointment.types.ts";
import {formatAppointmentDate} from "../../../appointment-staff/appointment-view/StaffEventView.tsx";

interface AdminEventViewProps {
  open: boolean;
  onClose: () => void;
  appointment: Appointment;
  onAppointmentUpdate: (status: UpdateAppointmentStatus) => void;
  deleteAppointment: () => void;
}

const AdminEventView = (
  {
    open,
    onClose,
    appointment,
    onAppointmentUpdate,
    deleteAppointment
  }: AdminEventViewProps) => {
  const {status, service, client} = appointment;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <Box minWidth={300}>
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">
              Appointment Information
            </Typography>
            <Chip
              size={'small'}
              label={`Status: ${status}`}
              color="primary"
              variant="outlined"
            />
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <Build/>
                </ListItemIcon>
                <ListItemText
                  primary="Service"
                  secondary={service.name}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <AccessTime/>
                </ListItemIcon>
                <ListItemText
                  primary="Time"
                  secondary={formatAppointmentDate(appointment)}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText
                  primary="Client"
                  secondary={`${client.firstName} ${client.lastName}`}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <Email/>
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary={client.email}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText
                  primary="Staff"
                  secondary={`${appointment.staff.firstName} ${appointment.staff.lastName}`}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <Email/>
                </ListItemIcon>
                <ListItemText
                  primary="Staff Email"
                  secondary={appointment.staff.email}
                />
              </ListItem>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {status === AppointmentStatus.NOT_APPROVED && (
            <>
              <Button
                variant={'outlined'}
                size={'small'}
                onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.APPROVED)}
                color="primary"
              >
                Approve Event
              </Button>
              <Button
                variant={'outlined'}
                size={'small'}
                onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.CANCELED)}
                color="secondary"
              >
                Cancel Event
              </Button>
            </>
          )}
          {status === AppointmentStatus.APPROVED && (
            <>
              <Button
                variant={'outlined'}
                size={'small'}
                onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.COMPLETED)}
                color="primary"
              >
                Complete Event
              </Button>
              <Button
                variant={'outlined'}
                size={'small'}
                onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.CANCELED)}
                color="secondary"
              >
                Cancel Event
              </Button>
            </>
          )}
          {status === AppointmentStatus.COMPLETED && (
            <Button
              variant={'outlined'}
              size={'small'}
              onClick={() => onAppointmentUpdate(UpdateAppointmentStatus.CANCELED)}
              color="secondary"
            >
              Cancel Event
            </Button>
          )}
          <Button
            variant={'outlined'}
            size={'small'}
            onClick={deleteAppointment}
            color="secondary"
          >
            Delete Event
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AdminEventView;