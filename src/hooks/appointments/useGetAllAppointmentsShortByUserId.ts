import {useQuery} from '@tanstack/react-query';
import {getAllAppointmentsByUserIdAndDate} from "../../services/appintment-service.ts";
import {ShortAppointment} from "../../shared/models/appointment.types.ts";

const useGetAllAppointmentsShortByUserId = (userId: number, startDate: Date, endDate: Date) => {
  const fetchAppointments = async () => {
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const results = await Promise.all(
      dates.map(date => {
        const formattedDate = date.toLocaleDateString('en-CA', {timeZone: 'Europe/Sofia'});
        return getAllAppointmentsByUserIdAndDate(userId, formattedDate);
      })
    );

    return results.filter(e => e !== undefined).flat();
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return useQuery<ShortAppointment[]>({
    queryKey: [
      'appointments', 'short',
      'userId', userId,
      'start-date', formatDate(startDate),
      'end-date', formatDate(endDate)
    ],
    queryFn: fetchAppointments,
  });
};

export default useGetAllAppointmentsShortByUserId;