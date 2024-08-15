import {CardsHolder, Header, MainWrapper, SubHeader} from './serviceSectionStyle.ts';
import ServiceCard from "./service_card_props/ServiceCard.tsx";

const serviceCardsData = [
  {
    image: "/static/images/home/fitness_service.jpg",
    alt: "Fitness Classes",
    title: "Fitness Classes",
    navigateTo: "/services/fitness-classes"
  },
  {
    image: "/static/images/home/massage_service.jpeg",
    alt: "Massage Therapy",
    title: "Massage Therapy",
    navigateTo: "/services/massage-therapy"
  },
  {
    image: "/static/images/home/skin_treatment_service.jpg",
    alt: "Skincare Treatments",
    title: "Skincare Treatments",
    navigateTo: "/services/skincare-treatments"
  }
];

const ServicesOverviewSection = () => {
  return (
    <MainWrapper>
      <Header variant="h4">
        Our Services
      </Header>
      <SubHeader variant="body1">
        We offer a variety of services to cater to your wellness needs, from fitness classes to massage therapy and
        skincare treatments.
      </SubHeader>
      <CardsHolder>
        {serviceCardsData.map((card, index) => (
          <ServiceCard
            key={index}
            image={card.image}
            alt={card.alt}
            title={card.title}
            navigateTo={card.navigateTo}
          />
        ))}
      </CardsHolder>
    </MainWrapper>
  );
};

export default ServicesOverviewSection;