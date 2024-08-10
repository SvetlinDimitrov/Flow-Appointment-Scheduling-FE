import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {mainBoxStyle} from "./heroSectionStyle.ts";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={mainBoxStyle}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Flow: Your Wellness Journey Starts Here
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Book Appointments for Fitness, Spa, and Wellness Services with Ease
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/appointments')}
      >
        Book Now
      </Button>
    </Box>
  );
};

export default HeroSection;