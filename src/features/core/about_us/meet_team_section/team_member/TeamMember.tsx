import {Avatar, Box, Typography} from '@mui/material';
import {
  avatarStyle,
  mainWrapperStyle,
  teamMemberDescriptionStyle,
  teamMemberNameStyle,
  teamMemberRoleStyle
} from "./teamMemberStyles.ts";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember = ({name, role, description, imageSrc}: TeamMemberProps) => {
  return (
    <Box sx={mainWrapperStyle}>
      <Avatar src={imageSrc} alt={name} sx={avatarStyle}/>
      <Typography variant="h6" sx={teamMemberNameStyle}>{name}</Typography>
      <Typography variant="body2" sx={teamMemberRoleStyle}>{role}</Typography>
      <Typography variant="body2" sx={teamMemberDescriptionStyle}>{description}</Typography></Box>
  );
};

export default TeamMember;