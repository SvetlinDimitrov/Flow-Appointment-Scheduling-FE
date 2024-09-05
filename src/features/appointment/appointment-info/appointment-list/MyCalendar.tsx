
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Appointment} from "../../../../shared/models/appointment.types.ts";

const localizer = momentLocalizer(moment);

interface MyCalendarProps {
  events: Appointment[];
}

const MyCalendar = ({ events } : MyCalendarProps) => {

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events.map(event => ({
          ...event,
          start: event.startDate,
          end: event.endDate,
          title: event.service.name
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={event => console.log(event)}
      />
    </div>
  );
};

export default MyCalendar;