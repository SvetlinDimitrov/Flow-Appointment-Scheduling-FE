import {useState} from 'react';
import {Calendar, momentLocalizer, View} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useGetAllAppointmentsShortByUserId from "../../../hooks/appointments/useGetAllAppointmentsShortByUserId.ts";

const localize = momentLocalizer(moment);

interface MyCalendarProps {
  userId: number;
}

const MyCalendar = ({userId}: MyCalendarProps) => {
  const [view, setView] = useState<View>('day');
  const [range, setRange] = useState<{ start: Date; end: Date }>({start: new Date(), end: new Date()});

  const {data: events = []} = useGetAllAppointmentsShortByUserId(userId, range.start, range.end);

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

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localize}
        events={events.map(event => ({
          ...event,
          start: new Date(event.startDate),
          end: new Date(event.endDate),
          title: event.serviceName
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}

        onView={newView => setView(newView)}
        onRangeChange={handleRangeChange}
        view={view}
      />
    </div>
  );
};

export default MyCalendar;