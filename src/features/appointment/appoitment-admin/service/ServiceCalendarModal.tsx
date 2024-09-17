import {useCallback, useState} from 'react';
import {Box, Chip, Modal, Typography} from '@mui/material';
import AccordionGridModal from "./calendar-modal/AccordionGridModal.tsx";
import MyCalendar from "../../../../shared/core/calendar/MyCalendar.tsx";
import ClientCustomToolbar from "../../appointment-client/calendar-toolbars/ClientCustomToolbar.tsx";
import {CalendarType, FetchType} from "../../../../shared/models/react-big-calendar.ts";
import {AppointmentStatus} from "../../../../shared/models/appointment.types.ts";
import {Service} from "../../../../shared/models/service.types.ts";

interface ServiceCalendarModalProps {
  open: boolean;
  service: Service;
  handleClose: () => void;
}

const ServiceCalendarModal = ({open, handleClose, service}: ServiceCalendarModalProps) => {
  const [selectedStatuses, setSelectedStatuses] = useState<AppointmentStatus[]>([
    AppointmentStatus.NOT_APPROVED,
    AppointmentStatus.APPROVED,
    AppointmentStatus.COMPLETED,
    AppointmentStatus.CANCELED,
  ]);

  const [appointmentCounts, setAppointmentCounts] = useState({
    [AppointmentStatus.NOT_APPROVED]: 0,
    [AppointmentStatus.APPROVED]: 0,
    [AppointmentStatus.COMPLETED]: 0,
    [AppointmentStatus.CANCELED]: 0,
  });

  const handleStatusChange = (status: AppointmentStatus) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const updateAppointmentCounts = useCallback((newCounts: Record<AppointmentStatus, number>) => {
    setAppointmentCounts(newCounts);
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(3px)',
      }}
    >
      <Box display={"flex"}
           flexDirection={"column"}
           alignItems={"center"}
           justifyContent={"center"}
           height={"86.1vh"}
           width={'80%'}
           minWidth={'300px'}
           bgcolor={"#f5f5f5"}
           p={3}
           borderRadius={2}
           boxShadow={24}
      >
        <Box display="flex" flexDirection="row" alignItems="center" mb={3}>
          <Typography variant={"h5"} mr={2}>
            {service.name} Calendar
          </Typography>
          <Chip
            label={`Total: ${Object.values(appointmentCounts).reduce((total, count) => total + count, 0)}`}
            color="primary"
            variant="outlined"
          />
        </Box>
        <AccordionGridModal
          appointmentCounts={appointmentCounts}
          selectedStatuses={selectedStatuses}
          handleStatusChange={handleStatusChange}
        />
        <MyCalendar
          filterByStatus={selectedStatuses}
          calendarType={CalendarType.ADMIN}
          fetchId={service.id}
          fetchType={FetchType.SERVICE}
          CustomToolbar={ClientCustomToolbar}
          width={'90%'}
          height={'80%'}
          startDate={undefined}
          endDate={undefined}
          updateAppointmentCounts={updateAppointmentCounts}
        />
      </Box>
    </Modal>
  );
};

export default ServiceCalendarModal;