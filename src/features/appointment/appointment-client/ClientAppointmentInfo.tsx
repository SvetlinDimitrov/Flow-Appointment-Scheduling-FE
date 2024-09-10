import {Box, Typography} from '@mui/material';
import {ShortAppointment, UpdateAppointmentStatus} from "../../../shared/models/appointment.types.ts";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import MyCalendar from "../../../shared/core/calendar/MyCalendar.tsx";
import {useContext, useState} from "react";
import {UserAuthContext} from "../../../shared/context/UserAuthContext.tsx";
import ClientAppointmentDetails from "./detailed-appoitment/ClientAppointmentDetails.tsx";
import useGetAppointmentByIdQuery from "../../../hooks/appointments/query/useGetAppointmentByIdQuery.ts";
import useGetAllAppointmentsShortByUserId
  from "../../../hooks/appointments/query/useGetAllAppointmentsShortByUserId.ts";
import useUpdateAppointmentMutation from "../../../hooks/appointments/mutation/useUpdateAppointmentMutation.ts";
import FullScreenLoader from "../../../shared/core/loading/full-screen-loader/FullScreenLoader.tsx";
import BookAppointmentModal from "./book-modal/BookAppointmentModal.tsx";
import ClientCustomToolbar from "./calendar-toolbars/ClientCustomToolbar.tsx";

const ClientAppointmentInfo = () => {

  const {userId} = useContext(UserAuthContext)!;

  const [currentAppointmentId, setCurrentAppointmentId] = useState<number | null>(null);
  const [isCanceling, setIsCanceling] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const {data: appointment, isLoading} = useGetAppointmentByIdQuery(currentAppointmentId);
  const {openModal, closeModal} = useConfirmationModal();
  const updateAppointmentMutation = useUpdateAppointmentMutation();

  if (!userId) return null;

  const handleOpenDetails = (a: ShortAppointment) => {
    setCurrentAppointmentId(a.id);
  }

  const cancelAppointment = () => {
    const onConfirm = () => {
      if (appointment) {
        setIsCanceling(true);
        updateAppointmentMutation.mutate(
          {id: appointment.id, appointment: {status: UpdateAppointmentStatus.CANCELED}},
          {
            onSettled: () => {
              setIsCanceling(false)
              setCurrentAppointmentId(null);
              closeModal();
            }
          },
        )
      }
    };

    openModal("Cancel Appointment", `Are you sure you want to cancel this appointment?`, onConfirm);
  }

  return (
    <>
      {appointment && isBooking &&
        <BookAppointmentModal
          open={isBooking}
          onClose={() => setIsBooking(false)}
          service={appointment.service}
          staff={appointment.staff}
        />
      }
      <FullScreenLoader isLoading={isCanceling}/>
      <Box display={"flex"} flexDirection={"column"}
           alignItems={"center"} justifyContent={"center"} height={"86.1vh"}>
        <Typography variant={"h5"} mb={5}>
          My Appointments
        </Typography>
        <MyCalendar
          openDetails={handleOpenDetails}
          useGetAppointmentsHook={(start, end) => useGetAllAppointmentsShortByUserId(userId, start, end)}
          CustomToolbar={ClientCustomToolbar}
          width={'90%'}
          height={'80%'}
          startDate={undefined}
          endDate={undefined}
        />
      </Box>
      {currentAppointmentId && !isLoading && appointment &&
        <ClientAppointmentDetails
          onClose={() => setCurrentAppointmentId(null)}
          open={!!currentAppointmentId}
          appointment={appointment}
          cancelAppointment={cancelAppointment}
          bookAgain={() => setIsBooking(true)}
        />}
    </>
  );
};

export default ClientAppointmentInfo;