import {ComponentType, useState} from 'react';
import {Calendar, momentLocalizer, ToolbarProps, View} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {ShortAppointment} from '../../models/appointment.types.ts';
import './index.css';
import MonthCustomEvent from './events/MonthCustomEvent.tsx';
import DayCustomEvent from './events/DayCustomEvent.tsx';
import WeekCustomEvent from './events/WeekCustomEvent.tsx';
import PageNotFound from "../not-found/PageNotFound.tsx";
import ContainerLoader from "../loading/container-loader/ContainerLoader.tsx";
import useGetAllAppointmentsShortByUserId
  from "../../../hooks/appointments/query/useGetAllAppointmentsShortByUserId.ts";
import {Box} from "@mui/material";

const localize = momentLocalizer(moment);

interface MyCalendarProps {
  openDetails: ((a: ShortAppointment) => void) | undefined;
  CustomToolbar: ComponentType<ToolbarProps<ShortAppointment>>;
  height: number | string;
  width: number | string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  userId: number;
}

const MyCalendar = (
  {
    openDetails,
    CustomToolbar,
    height,
    width,
    startDate,
    endDate,
    userId
  }: MyCalendarProps) => {

  const [view, setView] = useState<View>('day');
  const [range, setRange] = useState<{ start: Date; end: Date }>({start: new Date(), end: new Date()});

  const {data: events = [], isLoading, error} = useGetAllAppointmentsShortByUserId(userId, range.start, range.end);

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