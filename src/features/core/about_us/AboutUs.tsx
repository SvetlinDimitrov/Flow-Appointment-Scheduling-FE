import {Box} from '@mui/material';
import IntroductionSection from "./introduction_section/IntroductionSection.tsx";
import MissionValuesSection from "./mission_values_section/MissionValuesSection.tsx";
import MeetTeamSection from "./meet_team_section/MeetTeamSection.tsx";
import {mainWrapperStyle} from "./aboutUsStyles.ts";

const AboutUs = () => {
  return (
    <Box sx={mainWrapperStyle}>
      <IntroductionSection/>
      <MissionValuesSection/>
      <MeetTeamSection/>
    </Box>
  );
};

export default AboutUs;