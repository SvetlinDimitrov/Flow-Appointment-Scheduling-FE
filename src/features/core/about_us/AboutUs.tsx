import IntroductionSection from "./introduction_section/IntroductionSection.tsx";
import MissionValuesSection from "./mission_values_section/MissionValuesSection.tsx";
import MeetTeamSection from "./meet_team_section/MeetTeamSection.tsx";
import {styled} from "@mui/system";
import {Box} from "@mui/material";

const MainWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

const AboutUs = () => {
  return (
    <MainWrapper>
      <IntroductionSection/>
      <MissionValuesSection/>
      <MeetTeamSection/>
    </MainWrapper>
  );
};

export default AboutUs;