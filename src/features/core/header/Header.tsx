import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../shared/context/AuthContext.tsx";
import {appBarStyles, buttonStyles, typographyStyles} from "./headerStyles.ts";
import AssignmentIcon from '@mui/icons-material/Assignment';

const Header = () => {
  const navigate = useNavigate();

  const {isUserAuthenticated} = useContext(AuthContext)!;

  return (
    <AppBar sx={appBarStyles}>
      <Toolbar>
        <IconButton size={'large'} edge={'start'} color={'inherit'} aria-label={'logo'} onClick={() => navigate('/')}>
          <AssignmentIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={typographyStyles}>
          Flow Appointment Scheduling
        </Typography>
        <Stack direction={'row'} spacing={2}>
          <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/about-us')}>
            About us
          </Button>
        {!isUserAuthenticated() &&
          <>
            <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/register')}>
              Register
            </Button>
          </>
        }
        {isUserAuthenticated() &&
          <>
            <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/settings')}>
              Settings
            </Button>
            <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/logout')}>
              Logout
            </Button>
          </>
        }
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;