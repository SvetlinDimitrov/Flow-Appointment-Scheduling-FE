import ServiceCard from "./service_card_props/ServiceCard.tsx";
import {styled} from "@mui/system";
import {Box, Stack, Typography} from "@mui/material";

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

const MainWrapper = styled(Stack)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(5),
  padding: theme.spacing(2),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

const CardsHolder = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
  justifyContent: 'center',
  gap: theme.spacing(5),
}));

const ServicesOverviewSection = () => {
  return (
    <MainWrapper>
      <Typography variant={"h4"} fontWeight={'bold'} fontSize={'2.5rem'} color={'#333'}>
        Our Services
      </Typography>
      <Typography variant={"body1"} fontSize={'1.25rem'} lineHeight={1.5} color={'#666'}>
        We offer a variety of services to cater to your wellness needs, from fitness classes to massage therapy and
        skincare treatments.
      </Typography>
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