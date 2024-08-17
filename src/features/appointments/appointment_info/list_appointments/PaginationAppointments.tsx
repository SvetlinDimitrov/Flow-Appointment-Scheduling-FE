import {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {Appointment} from "../../../../models/appointment.types.ts";
import AppointmentItem from "./appointment/AppointmentItem.tsx";

const CenteredBox = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  margin: theme.spacing(2),
  textAlign: 'center',
  maxWidth: 600,
  width: '100%',
  height: 460,
}));

interface PaginationProps {
  appointments: Appointment[];
  onCancel: (appointment: Appointment) => void;
  onViewMore: (appointment: Appointment) => void;
}

const PaginationAppointments = ({appointments, onCancel, onViewMore}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const appointmentsPerPage = 6;

  const totalPages = Math.ceil(appointments.length / appointmentsPerPage);

  const handleNextPage = () => {
    if ((currentPage + 1) * appointmentsPerPage < appointments.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * appointmentsPerPage;
  const endIndex = startIndex + appointmentsPerPage;
  const currentAppointments = appointments.slice(startIndex, endIndex);

  return (
    <Box display={'flex'} justifyContent={'center'}
         alignItems={'center'} flexDirection={'column'} width={'100%'}>
      <CenteredBox>
        {currentAppointments.map((appointment, index) => (
          <AppointmentItem
            key={index}
            appointment={appointment}
            index={index}
            currentAppointments={currentAppointments}
            onCancel={onCancel}
            onViewMore={onViewMore}
          />
        ))}
      </CenteredBox>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
        <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </Button>
        <Typography variant="body2">
          {currentPage + 1} / {totalPages}
        </Typography>
        <Button onClick={handleNextPage} disabled={endIndex >= appointments.length}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationAppointments;