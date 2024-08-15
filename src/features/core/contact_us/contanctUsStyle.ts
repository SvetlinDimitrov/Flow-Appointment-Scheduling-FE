import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import {CoreHeader as SharedHeader} from "../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../shared/styles/subHeaders.ts";

export const MainWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: '1rem',
  height:'82.6vh',
  [theme.breakpoints.down('lg')]: {
    height: 'auto',
  },
}));

export const Header = SharedHeader;

export const SubHeading = styled(SharedSubHeader)(() => ({
  color: '#666',
  textAlign: 'center',
}));

export const SecondWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  height: '400px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: theme.spacing(5),
    height: 'auto',
  },
}));

export const ContactInfoWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  margin: '1rem 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '0.3rem',
  },
}));

export const MapWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flex: 1,
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

export const FormWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flex: 1,
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

export const Telephone = styled(Typography)(() => ({
  fontSize: '1rem',
  color: '#333',
}));

export const Email = styled(Typography)(() => ({
  fontSize: '1rem',
  color: '#333',
}));