import {Box, Typography} from '@mui/material';
import {Appointment} from "../../../shared/models/appointment.types.ts";
import {useNavigate} from "react-router-dom";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import MyCalendar from "./MyCalendar.tsx";
import {useContext} from "react";
import {UserAuthContext} from "../../../shared/context/UserAuthContext.tsx";

const AppointmentInfo = () => {
  const navigate = useNavigate();

  const {userId} = useContext(UserAuthContext)!;

  if (!userId) return null;

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
      <Typography variant={"h3"} mb={5}>
        My Appointments
      </Typography>
      <MyCalendar userId={userId}/>
    </Box>
  );
};

export default AppointmentInfo;