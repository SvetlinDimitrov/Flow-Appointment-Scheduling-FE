import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../shared/context/AuthContext.tsx";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {appBarStyles, buttonStyles, typographyStyles} from "./headerStyles.ts";

const Header = () => {
  const navigate = useNavigate();

  const {isUserAuthenticated} = useContext(AuthContext)!;

  return (
    <AppBar sx={appBarStyles}>
      <Toolbar>
        <IconButton size={'large'} edge={'start'} color={'inherit'} aria-label={'logo'} onClick={() => navigate('/')}>
          <AccountBalanceIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={typographyStyles}>
          Flow Appointment Scheduling
        </Typography>
        {!isUserAuthenticated() &&
          <Stack direction={'row'} spacing={2}>
            <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/register')}>
              Register
            </Button>
          </Stack>
        }
        {isUserAuthenticated() &&
          <Stack direction={'row'} spacing={2}>
            <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/settings')}>
              Settings
            </Button>
            <Button color="inherit" sx={buttonStyles} onClick={() => navigate('/logout')}>
              Logout
            </Button>
          </Stack>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;