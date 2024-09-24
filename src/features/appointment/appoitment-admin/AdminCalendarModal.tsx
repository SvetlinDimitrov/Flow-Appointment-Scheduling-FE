import {Box, Chip, Modal, Typography} from '@mui/material';
import AccordionGridModal from "./calendar-modal/AccordionGridModal.tsx";
import MyCalendar from "../../../shared/core/calendar/MyCalendar.tsx";
import {CalendarType, FetchType} from "../../../shared/models/react-big-calendar.ts";
import {Service} from "../../../shared/models/service.types.ts";
import AdminCustomToolbar from "./calendar-toolbar/AdminCustomToolbar.tsx";
import useAdditionalFilteringCalendar from "../../../hooks/custom/useAdditionalFilteringCalendar.ts";
import {User} from "../../../shared/models/user.types.ts";

interface ServiceCalendarModalProps {
  open: boolean;
  type: Service | User;
  handleClose: () => void;
}

const isService = (type: Service | User): type is Service => {
  return (type as Service).name !== undefined;
};

const AdminCalendarModal = ({open, handleClose, type}: ServiceCalendarModalProps) => {

  const {
    selectedStatuses,
    appointmentCounts,
    handleStatusChange,
    updateAppointmentCounts
  } = useAdditionalFilteringCalendar();

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
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          mb={3}
        >
          <Typography variant={"h5"} mr={2}>
            {isService(type) ? type.name : `${type.firstName} ${type.lastName}`} Calendar
          </Typography>
          <Chip
            label={`Total: ${selectedStatuses.reduce((total, status) => total + appointmentCounts[status], 0)}`}
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
          fetchId={type.id}
          fetchType={isService(type) ? FetchType.SERVICE : FetchType.USER}
          CustomToolbar={AdminCustomToolbar}
          width={'90%'}
          height={'80%'}
          updateAppointmentCounts={updateAppointmentCounts}
        />
      </Box>
    </Modal>
  );
};

export default AdminCalendarModal;