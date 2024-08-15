import {MainWrapper, MissionAvatar, MissionDescription, MissionTitle} from "./missionValueItemStyle.ts";

interface MissionValueItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const MissionValueItem = ({iconSrc, title, description}: MissionValueItemProps) => {
  return (
    <MainWrapper>
      <MissionAvatar src={iconSrc} alt={`${title} Icon`}/>
      <MissionTitle variant="h6">{title}</MissionTitle>
      <MissionDescription variant="body2">{description}</MissionDescription>
    </MainWrapper>
  );
};

export default MissionValueItem;