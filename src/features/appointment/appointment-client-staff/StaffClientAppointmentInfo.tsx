import {Box, Typography} from '@mui/material';
import {Appointment, ShortAppointment} from "../../../shared/models/appointment.types.ts";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import StaffClientCalendar from "./StaffClientCalendar.tsx";
import {useContext, useState} from "react";
import {UserAuthContext} from "../../../shared/context/UserAuthContext.tsx";
import ClientAppointmentDetails from "./client-detailed-appointment/ClientAppointmentDetails.tsx";
import useGetAppointmentByIdQuery from "../../../hooks/appointments/useGetAppointmentByIdQuery.ts";

const StaffClientAppointmentInfo = () => {

  const {userId} = useContext(UserAuthContext)!;

  const [currentAppointmentId, setCurrentAppointmentId] = useState<number | null>(null);

  const {data: appointment, isLoading} = useGetAppointmentByIdQuery(currentAppointmentId);
  const {openModal, closeModal} = useConfirmationModal();

  if (!userId) return null;

  const cancelAppointment = (appointment: Appointment) => {
    const onConfirm = () => {
      if (appointment) {
        console.log('Cancel appointment:', appointment);
      }
      closeModal();
    };

    openModal("Cancel Appointment", `Are you sure you want to cancel this appointment?`, onConfirm);
  }

  return (
    <>
    <Box display={"flex"} flexDirection={"column"}
         alignItems={"center"} justifyContent={"center"} height={"86.1vh"}>
      <Typography variant={"h3"} mb={5}>
        My Appointments
      </Typography>
      <StaffClientCalendar
        userId={userId}
        openDetails={(a: ShortAppointment) => setCurrentAppointmentId(a.id)}/>
    </Box>
      {currentAppointmentId && !isLoading && appointment &&
        <ClientAppointmentDetails
          onClose={() => setCurrentAppointmentId(null)}
          open={!!currentAppointmentId}
          appointment={appointment}
          cancelAppointment={() => cancelAppointment(appointment)}
          bookAgain={() => console.log("asdasd")}
        />}
    </>
  );
};

export default StaffClientAppointmentInfo;