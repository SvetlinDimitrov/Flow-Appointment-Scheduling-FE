import {AppBar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useContext} from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Sandwich from "./sandwitch/Sandwich.tsx";
import {UserAuthContext} from "../../shared/context/UserAuthContext.tsx";
import {styled} from "@mui/system";

const StyledTypography = styled(Typography)(({theme}) => ({
  flexGrow: 1,
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
}));

const HorizontalLinks = styled(Box)(({theme}) => ({
  flexDirection: 'row',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const StyledButton = styled(Button)(() => ({
  margin: '0 10px',
  color: 'inherit'
}));

const Header = () => {

  const navigate = useNavigate();

  const {isUserAuthenticated, logout} = useContext(UserAuthContext)!;

  const menuItems = (
    <>
      <StyledButton onClick={() => navigate('/about-us')}>
        About us
      </StyledButton>
      {!isUserAuthenticated() && (
        <>
          <StyledButton onClick={() => navigate('/login')}>
            Login
          </StyledButton>
          <StyledButton onClick={() => navigate('/register')}>
            Register
          </StyledButton>
        </>
      )}
      {isUserAuthenticated() && (
        <>
          <StyledButton onClick={() => navigate('/settings')}>
            Settings
          </StyledButton>
          <StyledButton onClick={() => {
            if (window.confirm("Are you sure you want to logout?")) logout();
          }}>
            Logout
          </StyledButton>
        </>
      )}
    </>
  );

  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        <IconButton size={'large'} edge={'start'} color={'inherit'}
                    aria-label={'logo'} onClick={() => navigate('/')}>
          <AssignmentIcon/>
        </IconButton>
        <StyledTypography variant={"h6"}>
          Flow Appointment Scheduling
        </StyledTypography>
        <Sandwich menuItems={menuItems}/>
        <HorizontalLinks>
          {menuItems}
        </HorizontalLinks>
      </Toolbar>
    </AppBar>
  );
};

export default Header;