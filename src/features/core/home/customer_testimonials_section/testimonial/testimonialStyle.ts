import {styled} from "@mui/system";
import {Avatar, Box, Typography} from "@mui/material";

export const MainWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
}));

export const MainParagraph = styled(Typography)(({theme}) => ({
  fontSize: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  color: 'white',
}));

export const ClientNameAndAvatarWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
}));

export const AvatarStyle = styled(Avatar)(({theme}) => ({
  width: 70,
  height: 70,
  marginBottom: theme.spacing(1),
}));

export const ClientName = styled(Typography)(({theme}) => ({
  fontSize: '1.8rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
  color: 'white',
}));