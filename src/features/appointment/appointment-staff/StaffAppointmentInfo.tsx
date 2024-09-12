import {useContext, useState} from "react";
import useGetAppointmentByIdQuery from "../../../hooks/appointments/query/useGetAppointmentByIdQuery.ts";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import useUpdateAppointmentMutation from "../../../hooks/appointments/mutation/useUpdateAppointmentMutation.ts";
import {ShortAppointment, UpdateAppointmentStatus} from "../../../shared/models/appointment.types.ts";
import FullScreenLoader from "../../../shared/core/loading/full-screen-loader/FullScreenLoader.tsx";
import {Box, Typography} from "@mui/material";
import MyCalendar from "../../../shared/core/calendar/MyCalendar.tsx";
import useGetAllAppointmentsShortByUserId
  from "../../../hooks/appointments/query/useGetAllAppointmentsShortByUserId.ts";
import StaffCustomToolbar from "./calendar-toolbars/StaffCustomToolbar.tsx";
import {UserAuthContext} from "../../../shared/context/UserAuthContext.tsx";
import StaffEventView from "./appointment-view/StaffEventView.tsx";

const StaffAppointmentInfo = () => {

  const {userId} = useContext(UserAuthContext)!;

  const [currentAppointmentId, setCurrentAppointmentId] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const {data: appointment, isLoading} = useGetAppointmentByIdQuery(currentAppointmentId);
  const {openModal, closeModal} = useConfirmationModal();
  const updateAppointmentMutation = useUpdateAppointmentMutation();

  if (!userId) return null;

  const handleOpenDetails = (a: ShortAppointment) => {
    setCurrentAppointmentId(a.id);
  }

  const modifyAppointment = (appointmentId: number, status: UpdateAppointmentStatus) => {
    const onConfirm = () => {
      if (appointment) {
        setIsProcessing(true);
        updateAppointmentMutation.mutate({id: appointmentId, appointment: {status}}, {
            onSettled: () => {
              setIsProcessing(false)
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
      <FullScreenLoader isLoading={isProcessing}/>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"86.1vh"}
      >
        <Typography variant={"h5"} mb={5}>
          My Appointments
        </Typography>
        <MyCalendar
          openDetails={handleOpenDetails}
          useGetAppointmentsHook={(start, end) => useGetAllAppointmentsShortByUserId(userId, start, end)}
          CustomToolbar={StaffCustomToolbar}
          width={'90%'}
          height={'80%'}
          startDate={undefined}
          endDate={undefined}
        />
      </Box>
      {currentAppointmentId && !isLoading && appointment &&
        <StaffEventView
          open={!!currentAppointmentId}
          onClose={() => setCurrentAppointmentId(null)}
          appointment={appointment}
          onAppointmentUpdate={(status: UpdateAppointmentStatus) => modifyAppointment(currentAppointmentId, status)}
        />
      }
    </>
  );
};

export default StaffAppointmentInfo;