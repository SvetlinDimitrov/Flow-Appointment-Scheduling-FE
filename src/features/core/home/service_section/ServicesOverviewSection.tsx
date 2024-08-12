import {Box, Stack, Typography} from '@mui/material';
import {cardsHolderStyle, mainRapperStyle, mainTitleStyle, subTextStyle} from './serviceSectionStyle.ts';
import ServiceCard from "./service_card_props/ServiceCard.tsx";

const serviceCardsData = [
  {
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.priceplow.com%2Fwp-content%2Fuploads%2Frevive-md-chris-bumstead-gym.jpg&f=1&nofb=1&ipt=611ffae345d9e5a04a2e6434b4bcb910ce594fd3b087f28b7d8ed007a384e8ff&ipo=images",
    alt: "Fitness Classes",
    title: "Fitness Classes",
    navigateTo: "/services/fitness-classes"
  },
  {
    image: "https://florida-academy.edu/wp-content/uploads/2019/11/MassageTherapyFAQs-FloridaAcademy.jpeg",
    alt: "Massage Therapy",
    title: "Massage Therapy",
    navigateTo: "/services/massage-therapy"
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgumlet.assettype.com%2Ffreepressjournal%2F2023-03%2F92967be8-b607-4e37-9f21-50d09f14a790%2Fwinter_skincare_2022_natural_ingredients_at_home.jpg&f=1&nofb=1&ipt=8e36e3ddc2e6daa25887752c1811c0ccb60be37eb4ef112d52936953ae5501da&ipo=images",
    alt: "Skincare Treatments",
    title: "Skincare Treatments",
    navigateTo: "/services/skincare-treatments"
  }
];

const ServicesOverviewSection = () => {
  return (
    <Stack sx={mainRapperStyle}>
      <Typography variant="h4" component="h2" sx={mainTitleStyle}>
        Our Services
      </Typography>
      <Typography variant="body1" sx={subTextStyle}>
        We offer a variety of services to cater to your wellness needs, from fitness classes to massage therapy and
        skincare treatments.
      </Typography>
      <Box sx={cardsHolderStyle}>
        {serviceCardsData.map((card, index) => (
          <ServiceCard
            key={index}
            image={card.image}
            alt={card.alt}
            title={card.title}
            navigateTo={card.navigateTo}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default ServicesOverviewSection;