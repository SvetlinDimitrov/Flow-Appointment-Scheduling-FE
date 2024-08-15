import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {Header, MainBox, SubHeader} from "./heroSectionStyle.ts";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <MainBox>
      <Header variant="h2" gutterBottom>
        Welcome to Flow: Your Wellness Journey Starts Here
      </Header>
      <SubHeader variant="h5" gutterBottom>
        Book Appointments for Fitness, Spa, and Wellness Services with Ease
      </SubHeader>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/appointments')}
      >
        Book Now
      </Button>
    </MainBox>
  );
};

export default HeroSection;