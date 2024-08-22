import {Box, Button, Typography} from '@mui/material';
import {Service} from "../../../../../shared/models/service.types.ts";

interface ServiceDetailSectionProps {
  service: Service;
  bookAgain: () => void;
}

const ServiceDetailSection = ({service, bookAgain}: ServiceDetailSectionProps) => {
  return (
    <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'}>
      <Typography variant="h5" mb={2}>
        Service Detail
      </Typography>
      <Typography variant="body1" mb={1}>
        <strong>Name:</strong> {service.name}
      </Typography>
      <Typography variant="body1" mb={1}>
        <strong>Description:</strong> {service.description}
      </Typography>
      <Typography variant="body1" mb={1}>
        <strong>Duration:</strong> {service.duration} minutes
      </Typography>
      <Typography variant="body1" mb={1}>
        <strong>Place:</strong> {service.place.name}
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={bookAgain}>Book again</Button>
      </Box>
    </Box>
  );
};

export default ServiceDetailSection;