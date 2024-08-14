import {Box, Typography} from '@mui/material';
import {ReactNode} from 'react';

interface UserInfoItemProps {
  label: string;
  value: ReactNode;
}

const UserInfoItem = ({label, value}: UserInfoItemProps) => {
  return (
    <Box sx={{
      padding: 2,
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Typography variant="body1" sx={{fontWeight: 'bold', marginRight: 2}}>
        {label}
      </Typography>
      <Typography variant="body2">
        {value}
      </Typography>
    </Box>
  );
};

export default UserInfoItem;