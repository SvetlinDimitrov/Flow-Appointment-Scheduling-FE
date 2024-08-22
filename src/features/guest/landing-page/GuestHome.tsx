import HeroSection from "./hero-section/HeroSection.tsx";
import ServiceGuestSection from "./service-section/ServiceGuestSection.tsx";
import CustomerTestimonialsSection from "./customer-section/CustomerTestimonialsSection.tsx";

const GuestHome = () => {
  return (
    <>
      <HeroSection/>
      <ServiceGuestSection/>
      <CustomerTestimonialsSection/>
    </>
  );
};

export default GuestHome;