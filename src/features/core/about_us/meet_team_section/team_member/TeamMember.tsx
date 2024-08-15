import {MainWrapper, StyledAvatar, TeamMemberDescription, TeamMemberName, TeamMemberRole} from "./teamMemberStyles.ts";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember = ({name, role, description, imageSrc}: TeamMemberProps) => {
  return (
    <MainWrapper>
      <StyledAvatar src={imageSrc} alt={name}/>
      <TeamMemberName variant="h6">{name}</TeamMemberName>
      <TeamMemberRole variant="body2">{role}</TeamMemberRole>
      <TeamMemberDescription variant="body2">{description}</TeamMemberDescription>
    </MainWrapper>
  );
};

export default TeamMember;