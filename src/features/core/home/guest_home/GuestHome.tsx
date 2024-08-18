import HeroSection from "./hero_section/HeroSection.tsx";
import ServicesOverviewSection from "../../../services/guest_home_service_list/ServicesOverviewSection.tsx";
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