import {Box, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {styled} from "@mui/system";
import {CoreHeader as SharedHeader} from "../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../shared/styles/subHeaders.ts";

const MainBox = styled(Box)(({theme}) => ({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  overflow: 'hidden',
  gap: theme.spacing(8),
  backgroundImage: 'url(/static/images/home/hero_section_bg.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <MainBox>
      <SharedHeader variant={"h2"} gutterBottom>
        Welcome to Flow: Your Wellness Journey Starts Here
      </SharedHeader>
      <SharedSubHeader variant={"h5"} gutterBottom>
        Book Appointments for Fitness, Spa, and Wellness Services with Ease
      </SharedSubHeader>
      <Button
        variant={"contained"}
        color={"primary"}
        onClick={() => navigate('/appointments')}
      >
        Book Now
      </Button>
    </MainBox>
  );
};

export default HeroSection;