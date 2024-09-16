import {ComponentType, useState} from 'react';
import {Calendar, momentLocalizer, ToolbarProps, View} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {ShortAppointment, UpdateAppointmentStatus} from '../../models/appointment.types.ts';
import './index.css';
import PageNotFound from "../not-found/PageNotFound.tsx";
import ContainerLoader from "../loading/container-loader/ContainerLoader.tsx";
import useGetAllAppointmentsShort from "../../../hooks/appointments/query/useGetAllAppointmentsShortByUserId.ts";
import {Box} from "@mui/material";
import {CalendarType, FetchType} from "../../models/react-big-calendar.ts";
import useGetAppointmentByIdQuery from "../../../hooks/appointments/query/useGetAppointmentByIdQuery.ts";
import {useConfirmationModal} from "../../context/ConfirmationModalContext.tsx";
import useUpdateAppointmentMutation from "../../../hooks/appointments/mutation/useUpdateAppointmentMutation.ts";
import FullScreenLoader from "../loading/full-screen-loader/FullScreenLoader.tsx";
import MonthCustomEvent from "./events/MonthCustomEvent.tsx";
import DayCustomEvent from "./events/DayCustomEvent.tsx";
import WeekCustomEvent from "./events/WeekCustomEvent.tsx";
import StaffEventView from "../../../features/appointment/appointment-staff/appointment-view/StaffEventView.tsx";
import ClientAppointmentDetails
  from "../../../features/appointment/appointment-client/detailed-appoitment/ClientAppointmentDetails.tsx";
import BookAppointmentModal from "../../../features/appointment/appointment-client/book-modal/BookAppointmentModal.tsx";

const localize = momentLocalizer(moment);

interface MyCalendarProps {
  CustomToolbar: ComponentType<ToolbarProps<ShortAppointment>>;
  height: number | string;
  width: number | string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  fetchId: number;
  fetchType: FetchType;
  calendarType: CalendarType;
}

const MyCalendar = (
  {
    calendarType,
    CustomToolbar,
    height,
    width,
    startDate,
    endDate,
    fetchId,
    fetchType
  }: MyCalendarProps) => {
  const [view, setView] = useState<View>('day');
  const [range, setRange] = useState<{ start: Date; end: Date }>({start: new Date(), end: new Date()});
  const [currentAppointmentId, setCurrentAppointmentId] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const {
    data: appointment,
    isLoading: appointmentLoading,
    error: appointmentError
  } = useGetAppointmentByIdQuery(currentAppointmentId);
  const {
    data: events = [],
    isLoading: allAppointmentsLoading,
    error: allAppointmentsError
  } = useGetAllAppointmentsShort(fetchId, range.start, range.end, fetchType);
  const {openModal, closeModal} = useConfirmationModal();
  const updateAppointmentMutation = useUpdateAppointmentMutation();

  const handleOpenAppointmentDetails = (e: ShortAppointment) => {
    if (calendarType !== CalendarType.BOOK) setCurrentAppointmentId(e.id);
  };

  const modifyAppointment = (appointmentId: number, status: UpdateAppointmentStatus) => {
    const onConfirm = () => {
      if (appointment) {
        setIsProcessing(true);
        updateAppointmentMutation.mutate({id: appointmentId, appointment: {status}}, {
          onSettled: () => {
            setIsProcessing(false);
            setCurrentAppointmentId(null);
            closeModal();
          }
        });
      }
    };

    openModal("Cancel Appointment", `Are you sure you want to cancel this appointment?`, onConfirm);
  };

  const handleRangeChange = (range: { start: Date; end: Date } | Date[]) => {
    let startDate, endDate;

    if (Array.isArray(range)) {
      startDate = range[0];
      endDate = range[range.length - 1];
    } else {
      startDate = range.start;
      endDate = range.end;
    }

    setRange({start: startDate, end: endDate});
  };

  if (allAppointmentsError || appointmentError) return <PageNotFound/>;

  return (
    <>
      <FullScreenLoader isLoading={isProcessing}/>
      {allAppointmentsLoading && (
        <Box position="absolute" width="100%" display="flex" top={30}>
          <ContainerLoader height={200}/>
        </Box>
      )}
      <div style={{height, width}}>
        <Calendar
          localizer={localize}
          events={events}
          startAccessor={(event: ShortAppointment) => new Date(event.startDate)}
          endAccessor={(event: ShortAppointment) => new Date(event.endDate)}
          titleAccessor={(event: ShortAppointment) => event.serviceName}
          onView={newView => setView(newView)}
          view={view}
          step={20}
          timeslots={3}
          min={startDate && new Date(startDate)}
          max={endDate && new Date(endDate)}
          onRangeChange={handleRangeChange}
          onSelectEvent={handleOpenAppointmentDetails}
          components={{
            toolbar: CustomToolbar,
            month: {event: MonthCustomEvent},
            day: {event: DayCustomEvent},
            week: {event: WeekCustomEvent},
          }}
        />
      </div>
      {currentAppointmentId && !appointmentLoading && appointment && (
        <>
          {(calendarType === CalendarType.STAFF || calendarType === CalendarType.ADMIN) && (
            <StaffEventView
              open={!!currentAppointmentId}
              onClose={() => setCurrentAppointmentId(null)}
              appointment={appointment}
              onAppointmentUpdate={(status: UpdateAppointmentStatus) =>
                modifyAppointment(currentAppointmentId, status)
              }
            />
          )}
          {calendarType === CalendarType.CLIENT && (
            <ClientAppointmentDetails
              onClose={() => setCurrentAppointmentId(null)}
              open={!!currentAppointmentId}
              appointment={appointment}
              cancelAppointment={() =>
                modifyAppointment(currentAppointmentId, UpdateAppointmentStatus.CANCELED)
              }
              bookAgain={() => setIsBooking(true)}
            />
          )}
        </>
      )}
      {appointment && isBooking && (
        <BookAppointmentModal
          open={isBooking}
          onClose={() => setIsBooking(false)}
          service={appointment.service}
          staff={appointment.staff}
        />
      )}
    </>
  );
};

export default MyCalendar;