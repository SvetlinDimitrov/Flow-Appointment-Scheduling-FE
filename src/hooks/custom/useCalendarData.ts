import {useState} from 'react';
import {UseQueryResult} from '@tanstack/react-query';
import {View} from 'react-big-calendar';
import {ShortAppointment} from "../../shared/models/appointment.types.ts";

interface Range {
  start: Date;
  end: Date;
}

interface UseCalendarProps {
  useGetAppointmentsHook: (start: Date, end: Date) => UseQueryResult<ShortAppointment[], Error>;
}

const useCalendarData = ({useGetAppointmentsHook,}: UseCalendarProps) => {
  const [view, setView] = useState<View>('day');
  const [range, setRange] = useState<Range>({start: new Date(), end: new Date()});

  const {data: events = [], isLoading, error} = useGetAppointmentsHook(range.start, range.end);

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

  return {view, setView, range, handleRangeChange, events, isLoading, error};
};

export default useCalendarData;