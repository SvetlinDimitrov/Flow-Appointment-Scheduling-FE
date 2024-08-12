import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {headerStyle, mainBoxStyle, subHeaderStyle} from "./heroSectionStyle.ts";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={headerStyle} variant="h2" component="h1" gutterBottom>
        Welcome to Flow: Your Wellness Journey Starts Here
      </Typography>
      <Typography sx={subHeaderStyle} variant="h5" component="h2" gutterBottom>
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