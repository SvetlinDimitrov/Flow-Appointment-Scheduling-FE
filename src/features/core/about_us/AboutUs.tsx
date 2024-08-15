import IntroductionSection from "./introduction_section/IntroductionSection.tsx";
import MissionValuesSection from "./mission_values_section/MissionValuesSection.tsx";
import MeetTeamSection from "./meet_team_section/MeetTeamSection.tsx";
import {MainWrapper} from "./aboutUsStyles.ts";

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