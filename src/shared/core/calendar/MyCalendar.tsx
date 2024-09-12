import {ComponentType} from 'react';
import {Calendar, momentLocalizer, View} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {ShortAppointment} from '../../models/appointment.types.ts';
import './index.css';
import MonthCustomEvent from './events/MonthCustomEvent.tsx';
import DayCustomEvent from './events/DayCustomEvent.tsx';
import WeekCustomEvent from './events/WeekCustomEvent.tsx';
import PageNotFound from "../not-found/PageNotFound.tsx";
import {Box} from "@mui/material";
import ContainerLoader from "../loading/container-loader/ContainerLoader.tsx";

const localize = momentLocalizer(moment);

/**
 * This is the main calendar that every component will reuse. To reuse it, I have put some props:
 * - `openDetails`: defines what will happen if you click on a specific event.
 * - `useGetAppointmentsHook`: requires a React Query hook that will return `ShortAppointment[]`.
 * - `CustomToolbar`: shows all the available buttons that can be used (for example, the client will see only the day button, but the staff can see the week, month, agenda views).
 * - `height` and `width`: for managing the view of the calendar.
 * - `startDate` and `endDate`: which is a little tricky because I am not setting the year, month, day but only the hours that the calendar will show.
 */

interface MyCalendarProps {
  openDetails: ((a: ShortAppointment) => void) | undefined;
  setupCalendar: {
    view: View;
    setView: (view: View) => void;
    handleRangeChange: (range: { start: Date; end: Date } | Date[]) => void;
    events: ShortAppointment[];
    isLoading: boolean;
    error: any;
  };
  CustomToolbar: ComponentType<any>;
  height: number | string;
  width: number | string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

const MyCalendar = (
  {
    openDetails,
    setupCalendar,
    CustomToolbar,
    height,
    width,
    startDate,
    endDate
  }: MyCalendarProps) => {

  const {view, setView, handleRangeChange, events, isLoading, error} = setupCalendar;

  if (error) return <PageNotFound/>;

  return (
    <>
      {isLoading && (
        <Box
          position="absolute"
          width="100%"
          display="flex"
          top={30}
        >
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
          onSelectEvent={openDetails}
          components={{
            toolbar: CustomToolbar,
            month: {
              event: MonthCustomEvent,
            },
            day: {
              event: DayCustomEvent,
            },
            week: {
              event: WeekCustomEvent,
            },
          }}
        />
      </div>
    </>
  );
};

export default MyCalendar;