import {IconButton, Toolbar} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {HorizontalLinks, StyledAppBar, StyledButton, StyledTypography} from "./headerStyles.ts";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Sandwich from "./sandwitch/Sandwich.tsx";
import {UserAuthContext} from "../../shared/context/UserAuthContext.tsx";

const Header = () => {

  const navigate = useNavigate();

  const {isUserAuthenticated, logout} = useContext(UserAuthContext)!;

  const menuItems = (
    <>
      <StyledButton color="inherit" onClick={() => navigate('/about-us')}>
        About us
      </StyledButton>
      {!isUserAuthenticated() && (
        <>
          <StyledButton color="inherit" onClick={() => navigate('/login')}>
            Login
          </StyledButton>
          <StyledButton color="inherit" onClick={() => navigate('/register')}>
            Register
          </StyledButton>
        </>
      )}
      {isUserAuthenticated() && (
        <>
          <StyledButton color="inherit" onClick={() => navigate('/settings')}>
            Settings
          </StyledButton>
          <StyledButton color="inherit" onClick={() => {
            if (window.confirm("Are you sure you want to logout?")) logout();
          }}>
            Logout
          </StyledButton>
        </>
      )}
    </>
  );

  return (
    <StyledAppBar>
      <Toolbar>
        <IconButton size={'large'} edge={'start'} color={'inherit'} aria-label={'logo'} onClick={() => navigate('/')}>
          <AssignmentIcon/>
        </IconButton>
        <StyledTypography variant="h6">
          Flow Appointment Scheduling
        </StyledTypography>
        <Sandwich menuItems={menuItems}/>
        <HorizontalLinks>
          {menuItems}
        </HorizontalLinks>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;