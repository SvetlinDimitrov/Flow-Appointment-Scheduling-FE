import HeroSection from "./hero_section/HeroSection.tsx";
import ServicesOverviewSection from "./service_section/ServicesOverviewSection.tsx";
import CustomerTestimonialsSection from "./customer_testimonials_section/CustomerTestimonialsSection.tsx";

const GuestHome = () => {
  return (
    <>
      <HeroSection/>
      <ServicesOverviewSection/>
      <CustomerTestimonialsSection/>
    </>
  );
};

export default GuestHome;