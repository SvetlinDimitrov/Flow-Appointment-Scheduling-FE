import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {CoreHeader as SharedHeader} from "../../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../../shared/styles/subHeaders.ts";

const Image = styled('img')(({theme}) => ({
  width: '100%',
  maxWidth: 600,
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
}));

const IntroductionSection = () => {
  return (
    <Box textAlign={'center'} p={2}>
      <SharedHeader variant={"h4"} gutterBottom>
        Our Journey to Wellness
      </SharedHeader>
      <SharedSubHeader variant={"body1"} paragraph>
        Flow was born out of a passion for wellness and a desire to create a sanctuary where people can rejuvenate their
        bodies and minds. Since our inception, we've been dedicated to offering top-tier fitness, spa, and wellness
        services tailored to the needs of our diverse clientele.
      </SharedSubHeader>
      <Image
        src="/static/images/about_us/introduction_section_group.jpg"
        alt="Welcoming image of the spa"
      />
    </Box>
  );
};

export default IntroductionSection;