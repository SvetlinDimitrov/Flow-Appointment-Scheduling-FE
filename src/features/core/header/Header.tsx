import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../shared/context/AuthContext.tsx";
import {appBarStyles, buttonStyles, horizontalLinksStyles, typographyStyles} from "./headerStyles.ts";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Sandwich from "./sandwitch/Sandwich.tsx";

const Header = () => {
  const navigate = useNavigate();

  const {isUserAuthenticated} = useContext(AuthContext)!;

  const menuItems = (
    <>
      <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/about-us')}>
        About us
      </Button>
      {!isUserAuthenticated() && (
        <>
          <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/register')}>
            Register
          </Button>
        </>
      )}
      {isUserAuthenticated() && (
        <>
          <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/settings')}>
            Settings
          </Button>
          <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/logout')}>
            Logout
          </Button>
        </>
      )}
    </>
  );

  return (
    <AppBar sx={appBarStyles}>
      <Toolbar>
        <IconButton size={'large'} edge={'start'} color={'inherit'} aria-label={'logo'} onClick={() => navigate('/')}>
          <AssignmentIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={typographyStyles}>
          Flow Appointment Scheduling
        </Typography>
        <Sandwich menuItems={menuItems}/>
        <Stack sx={horizontalLinksStyles} direction={'row'} spacing={2}>
          {menuItems}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;