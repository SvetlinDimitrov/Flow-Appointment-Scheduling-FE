import {Box} from '@mui/material';
import HeroSection from './hero_section/HeroSection.tsx';
import ServicesOverviewSection from './service_section/ServicesOverviewSection.tsx';
import CustomerTestimonialsSection from './CustomerTestimonialsSection';

const Home = () => {
  return (
    <Box >
      <HeroSection/>
      <ServicesOverviewSection/>
      <CustomerTestimonialsSection/>
    </Box>
  );
};

export default Home;