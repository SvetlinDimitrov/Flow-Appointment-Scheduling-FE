import {Box, Button, Typography} from '@mui/material';
import {Service} from "../../../../../models/service.types.ts";

interface ServiceDetailSectionProps {
  service: Service;
}

const ServiceDetailSection = ({service}: ServiceDetailSectionProps) => {
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
        <Button variant="contained" color="primary">Book again</Button>
      </Box>
    </Box>
  );
};

export default ServiceDetailSection;