import {Avatar, Box, Typography} from '@mui/material';
import {
  mainWrapperStyle,
  missionAvatarStyle,
  missionDescriptionStyle,
  missionTitleStyle
} from "./missionValueItemStyle.ts";

interface MissionValueItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const MissionValueItem = ({iconSrc, title, description}: MissionValueItemProps) => {
  return (
    <Box sx={mainWrapperStyle}>
      <Avatar src={iconSrc} alt={`${title} Icon`} sx={missionAvatarStyle}/>
      <Typography variant="h6" sx={missionTitleStyle}>{title}</Typography>
      <Typography variant="body2" sx={missionDescriptionStyle}>{description}</Typography>
    </Box>
  );
};

export default MissionValueItem;