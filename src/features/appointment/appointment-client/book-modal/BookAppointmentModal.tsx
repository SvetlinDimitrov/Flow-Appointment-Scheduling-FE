import {Box, Dialog, DialogContent, DialogTitle, Typography} from '@mui/material';
import MyCalendar from '../../../../shared/core/calendar/MyCalendar.tsx';
import BookToolbar from '../calendar-toolbars/BookToolbar.tsx';
import useGetAllAppointmentsShortByUserId
  from '../../../../hooks/appointments/query/useGetAllAppointmentsShortByUserId.ts';
import {User} from '../../../../shared/models/user.types.ts';
import {Service} from '../../../../shared/models/service.types.ts';
import {DateTime} from 'luxon';
import BookFormSection from './BookFormSection.tsx';
import {AppointmentCreate} from "../../../../shared/models/appointment.types.ts";
import useGetUserQuery from "../../../../hooks/users/query/useGetUserQuery.ts";
import {useContext, useState} from "react";
import {UserAuthContext} from "../../../../shared/context/UserAuthContext.tsx";
import LoadingSpinner from "../../../../shared/core/loading/main-loader/LoadingSpinner.tsx";
import PageNotFound from "../../../../shared/core/not-found/PageNotFound.tsx";
import FullScreenLoader from "../../../../shared/core/loading/full-screen-loader/FullScreenLoader.tsx";
import {useConfirmationModal} from "../../../../shared/context/ConfirmationModalContext.tsx";
import useCreateAppointmentMutation from "../../../../hooks/appointments/mutation/useCreateAppointmentMutation.ts";

interface BookAppointmentModalProps {
  service: Service;
  staff: User;
  open: boolean;
  onClose: () => void;
}

const getWorkingHourValue = (workingHour?: DateTime): Date | undefined => {
  return workingHour ? DateTime.fromISO(workingHour.toString()).toJSDate() : undefined;
};

const BookAppointmentModal = ({service, staff, open, onClose}: BookAppointmentModalProps) => {
  const [isBooking, setIsBooking] = useState(false);

  const {userId} = useContext(UserAuthContext)!;

  const startDateValue = getWorkingHourValue(staff.staffDetails?.beginWorkingHour);
  const endDateValue = getWorkingHourValue(staff.staffDetails?.endWorkingHour);

  if (!userId) {
    return null;
  }

  const {data, error, isLoading} = useGetUserQuery(userId)
  const {openModal, closeModal} = useConfirmationModal();
  const createAppointmentMutation = useCreateAppointmentMutation();

  const onSubmit = (data: AppointmentCreate) => {
    const onConfirm = () => {
      setIsBooking(true);
      createAppointmentMutation.mutate(data, {
        onSuccess: () => {
          onClose();
        },
        onSettled: () => {
          setIsBooking(false);
          closeModal();
        }
      });
    }

    openModal("Confirm Booking", "Are you sure you want to book this appointment?", onConfirm);
  };

  if (isLoading) return <LoadingSpinner/>
  if (error) return <PageNotFound/>

  return (
    staff && service && data && (
      <>
        <FullScreenLoader isLoading={isBooking}/>
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogContent>
            <Box display="flex" p={1} minWidth={300} sx={{
              flexDirection: {xs: 'column', md: 'row'},
            }} gap={3}>
              <BookFormSection
                service={service}
                staff={staff}
                client={data}
                onSubmit={onSubmit}
              />
              <Box flex={1}>
                <Typography variant="h5" mb={2}>
                  Working Scheduler
                </Typography>
                <MyCalendar
                  openDetails={undefined}
                  useGetAppointmentsHook={
                    (start, end) => useGetAllAppointmentsShortByUserId(staff.id, start, end)
                  }
                  CustomToolbar={BookToolbar}
                  width={'100%'}
                  height={'95%'}
                  startDate={startDateValue}
                  endDate={endDateValue}
                />
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  );
};

export default BookAppointmentModal;