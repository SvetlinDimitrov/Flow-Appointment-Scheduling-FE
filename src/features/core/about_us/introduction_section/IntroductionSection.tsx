import {Header, Image, MainWrapper, Subheader} from "./introductionSectionStyles.ts";

const IntroductionSection = () => {
  return (
    <MainWrapper>
      <Header variant="h4" gutterBottom>
        Our Journey to Wellness
      </Header>
      <Subheader variant="body1" paragraph>
        Flow was born out of a passion for wellness and a desire to create a sanctuary where people can rejuvenate their
        bodies and minds. Since our inception, we've been dedicated to offering top-tier fitness, spa, and wellness
        services tailored to the needs of our diverse clientele.
      </Subheader>
      <Image
        src="/static/images/about_us/introduction_section_group.jpg"
        alt="Welcoming image of the spa"
      />
    </MainWrapper>
  );
};

export default IntroductionSection;