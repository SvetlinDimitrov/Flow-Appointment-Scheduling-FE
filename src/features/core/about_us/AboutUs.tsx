import {Box} from '@mui/material';
import IntroductionSection from "./introduction_section/IntroductionSection.tsx";
import MissionValuesSection from "./mission_values_section/MissionValuesSection.tsx";
import MeetTeamSection from "./meet_team_section/MeetTeamSection.tsx";

const AboutUs = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      mt: 5,
      mb: 5
    }}>
      <IntroductionSection/>
      <MissionValuesSection/>
      <MeetTeamSection/>
    </Box>
  );
};

export default AboutUs;