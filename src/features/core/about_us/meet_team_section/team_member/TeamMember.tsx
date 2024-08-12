import {Avatar, Box, Typography} from '@mui/material';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember = ({name, role, description, imageSrc}: TeamMemberProps) => {
  return (
    <Box sx={{
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '25%',
      gap: 1,
      border: '1px solid #ccc',
      borderRadius: 2,
      padding: 2,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <Avatar src={imageSrc} alt={name} sx={{width: 150, height: 150, mb: 2}}/>
      <Typography variant="h6" sx={{fontWeight: 'bold', fontSize: '1.25rem'}}>{name}</Typography>
      <Typography variant="body2" sx={{color: 'black', fontStyle: 'italic'}}>{role}</Typography>
      <Typography variant="body2" sx={{color: 'dimgray', fontSize: '0.875rem'}}>{description}</Typography></Box>
  );
};

export default TeamMember;