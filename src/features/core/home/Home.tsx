import HeroSection from './hero_section/HeroSection.tsx';
import ServicesOverviewSection from './service_section/ServicesOverviewSection.tsx';
import CustomerTestimonialsSection from './customer_testimonials_section/CustomerTestimonialsSection.tsx';
import ContactUsSection from "./contact_us_section/ContactUsSection.tsx";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <ServicesOverviewSection/>
      <CustomerTestimonialsSection/>
      <ContactUsSection/>
    </>
  );
};

export default Home;