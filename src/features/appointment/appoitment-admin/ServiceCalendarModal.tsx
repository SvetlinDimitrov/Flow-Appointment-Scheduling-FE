import {Box, Modal, Typography} from '@mui/material';
import MyCalendar from "../../../shared/core/calendar/MyCalendar.tsx";
import ClientCustomToolbar from "../appointment-client/calendar-toolbars/ClientCustomToolbar.tsx";
import {CalendarType, FetchType} from "../../../shared/models/react-big-calendar.ts";

interface ServiceCalendarModalProps {
  open: boolean;
  serviceId: number;
  handleClose: () => void;
}

const ServiceCalendarModal = ({open, handleClose, serviceId}: ServiceCalendarModalProps) => {

  return (
    <>
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
             bgcolor={"#f5f5f5"}
             p={3}
             borderRadius={2}
             boxShadow={24}
        >
          <Typography variant={"h5"} mb={5}>
            Service Calendar
          </Typography>
          <MyCalendar
            calendarType={CalendarType.ADMIN}
            fetchId={serviceId}
            fetchType={FetchType.SERVICE}
            CustomToolbar={ClientCustomToolbar}
            width={'90%'}
            height={'80%'}
            startDate={undefined}
            endDate={undefined}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ServiceCalendarModal;