import {styled} from "@mui/system";
import {Box, Button} from "@mui/material";
import {CoreHeader as SharedHeader} from "../../../shared/styles/headers.ts";

export const MainWrapper = styled(Box)(({theme}) => ({
  position: 'relative',
  textAlign: 'center',
  padding: theme.spacing(3),
  backgroundImage: 'url("/static/images/home/customer_section_bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  [theme.breakpoints.down('lg')]: {
    height: 'auto',
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(6),
  alignItems: 'center',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));

export const Header = styled(SharedHeader)(({theme}) => ({
  color: 'white',
  marginBottom: theme.spacing(4),
}));

export const TestimonialWrapper = styled(Box)(({theme}) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  gap: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'center',
}));

export const AboutUsNavigationButton = styled(Button)(({theme}) => ({
  marginTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  fontSize: '1rem',
}));