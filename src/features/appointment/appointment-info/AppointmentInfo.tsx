import {Box, Typography} from '@mui/material';
import AppointmentEmpty from "./empty-appointment/AppointmentEmpty.tsx";
import PaginationAppointments from "./appointment-list/PaginationAppointments.tsx";
import {Appointment} from "../../../shared/models/appointment.types.ts";
import {useNavigate} from "react-router-dom";
import ConfirmationModalWrapper from "../../../shared/core/confirm-model/ConfirmationModalWrapper.tsx";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";

const appointmentsDummyData: Appointment[] = [];

const AppointmentInfo = () => {
  const navigate = useNavigate();

  const {openModal, closeModal} = useConfirmationModal();

  const cancelAppointment = (appointment: Appointment) => {
    const onConfirm = () => {
      if (appointment) {
        console.log('Cancel appointment:', appointment);
      }
      closeModal();
    };

    openModal("Cancel Appointment", `Are you sure you want to cancel this appointment?`, onConfirm);
  }

  const onViewMore = (appointment: Appointment) => {
    navigate(`/appointments/${appointment.id}`);
  }

  return (
    <Box display={"flex"} flexDirection={"column"}
         alignItems={"center"} justifyContent={"center"} height={"86.1vh"}>
      <Typography variant={"h4"}
      sx={{
        fontWeight: 'bold',
        fontSize: {
          xs: '1.5rem',
          sm: '2rem'
        }
      }}>
        My Appointments
      </Typography>
      {appointmentsDummyData && appointmentsDummyData.length === 0 ? (
        <AppointmentEmpty/>
      ) : (
        <PaginationAppointments appointments={appointmentsDummyData}
                                onCancel={cancelAppointment}
                                onViewMore={onViewMore}/>
      )}
      <ConfirmationModalWrapper/>
    </Box>
  );
};

export default AppointmentInfo;