import {styled} from '@mui/system';
import {Box, Typography} from '@mui/material';

export const UserInfoItemWrapper = styled(Box)(({theme}) => ({
  padding: theme.spacing(2),
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Label = styled(Typography)(({theme}) => ({
  fontWeight: 'bold',
  marginRight: theme.spacing(2),
}));

export const Value = styled(Typography)(() => ({
  variant: 'body2',
}));