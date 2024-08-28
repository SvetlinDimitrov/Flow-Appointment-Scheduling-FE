import {Box} from '@mui/material';
import {styled} from "@mui/system";
import {CoreHeader} from "../../../../shared/styles/headers.ts";
import {CoreSubHeader} from "../../../../shared/styles/subHeaders.ts";

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

  return (
    <MainBox>
      <CoreHeader variant={"h2"} gutterBottom>
        Welcome to Flow: Your Wellness Journey Starts Here
      </CoreHeader>
      <CoreSubHeader variant={"h5"} gutterBottom>
        Book Appointments for Fitness, Spa, and Wellness Services with Ease
      </CoreSubHeader>
    </MainBox>
  );
};

export default HeroSection;