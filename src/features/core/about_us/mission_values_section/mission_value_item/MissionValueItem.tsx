import {Avatar, Box, Typography} from '@mui/material';

interface MissionValueItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const MissionValueItem = ({iconSrc, title, description}: MissionValueItemProps) => {
  return (
    <Box sx={{
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '25%',
      gap: 1,
      border: '1px solid white',
      borderRadius: 2,
      padding: 2,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <Avatar src={iconSrc} alt={`${title} Icon`} sx={{width: 100, height: 100, mb: 2}}/>
      <Typography variant="h6" sx={{fontWeight: 'bold', fontSize: '1.25rem'}}>{title}</Typography>
      <Typography variant="body2" sx={{color: 'dimgray', fontSize: '0.875rem'}}>{description}</Typography>
    </Box>
  );
};

export default MissionValueItem;