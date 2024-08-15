import {styled} from "@mui/system";
import {Box, Typography, Stack} from "@mui/material";

export const MainWrapper = styled(Stack)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(5),
  padding: theme.spacing(2),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

export const Header = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '2.5rem',
  color: '#333',
}));

export const SubHeader = styled(Typography)(() => ({
  fontSize: '1.25rem',
  color: '#666',
  lineHeight: '1.5',
}));

export const CardsHolder = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
  justifyContent: 'center',
  gap: theme.spacing(5),
}));