import {Avatar, Box, Typography} from "@mui/material";
import {styled} from "@mui/system";

export const MainWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '40%',
  [theme.breakpoints.up('sm')]: {
    width: '40%',
  },
  [theme.breakpoints.up('md')]: {
    width: '25%',
  },
  gap: theme.spacing(1),
  border: '1px solid white',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

export const MissionAvatar = styled(Avatar)(({theme}) => ({
  width: 100,
  height: 100,
  marginBottom: theme.spacing(2),
}));

export const MissionTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.25rem',
}));

export const MissionDescription = styled(Typography)(() => ({
  color: 'dimgray',
  fontSize: '0.875rem',
}));