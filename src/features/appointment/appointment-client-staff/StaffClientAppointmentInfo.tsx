import {Box, Typography} from '@mui/material';
import {Appointment, ShortAppointment} from "../../../shared/models/appointment.types.ts";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import MyCalendar from "../../../shared/core/calendar/MyCalendar.tsx";
import {useContext, useState} from "react";
import {UserAuthContext} from "../../../shared/context/UserAuthContext.tsx";
import ClientAppointmentDetails from "./client-detailed-appointment/ClientAppointmentDetails.tsx";
import useGetAppointmentByIdQuery from "../../../hooks/appointments/useGetAppointmentByIdQuery.ts";
import useGetAllAppointmentsShortByUserId from "../../../hooks/appointments/useGetAllAppointmentsShortByUserId.ts";
import CustomToolbar from "./client/CustomToolbar.tsx";

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
      <Typography variant={"h5"} mb={5}>
        My Appointments
      </Typography>
      <MyCalendar
        openDetails={(a: ShortAppointment) => setCurrentAppointmentId(a.id)}
        useGetAppointmentsHook={(start, end) => useGetAllAppointmentsShortByUserId(userId, start, end)}
        CustomToolbar={CustomToolbar}
      />
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