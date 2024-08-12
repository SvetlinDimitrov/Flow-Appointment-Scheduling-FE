import { SxProps } from '@mui/material';

export const containerStyles: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '86.1vh',
  flexDirection: 'column',
  textAlign: 'center',
  padding: 3
};

export const buttonStyles: SxProps = {
  marginTop: 2,
  padding: '10px 20px',
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
};