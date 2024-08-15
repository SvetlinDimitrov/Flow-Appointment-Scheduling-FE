import {Avatar, Box, Typography} from "@mui/material";
import {styled} from "@mui/system";

export const MainWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '80%',
  [theme.breakpoints.up('sm')]: {
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '25%',
  },
  gap: theme.spacing(1),
  border: '1px solid #ccc',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
}));

export const StyledAvatar = styled(Avatar)(({theme}) => ({
  width: 150,
  height: 150,
  marginBottom: theme.spacing(2)
}));

export const TeamMemberName = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.25rem'
}));

export const TeamMemberRole = styled(Typography)(() => ({
  color: 'black',
  fontStyle: 'italic'
}));

export const TeamMemberDescription = styled(Typography)(() => ({
  color: 'dimgray',
  fontSize: '0.875rem'
}));