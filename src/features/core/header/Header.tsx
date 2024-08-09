import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../shared/context/AuthContext.tsx";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Header = () => {
  const navigate = useNavigate();

  const {isUserAuthenticated} = useContext(AuthContext)!;

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size={'large'} edge={'start'} color={'inherit'} aria-label={'logo'} onClick={() => navigate('/')}>
          <AccountBalanceIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Flow
        </Typography>
        {!isUserAuthenticated() &&
          <Stack direction={'row'} spacing={2}>
            <Button color="inherit" style={{margin: '0 10px'}} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button color="inherit" style={{margin: '0 10px'}} onClick={() => navigate('/register')}>
              Register
            </Button>
          </Stack>
        }
        {isUserAuthenticated() &&
          <Stack direction={'row'} spacing={2}>
            <Button color="inherit" style={{margin: '0 10px'}} onClick={() => navigate('/authed')}>
              Authed
            </Button>
          </Stack>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;