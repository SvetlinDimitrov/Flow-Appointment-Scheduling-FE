import {AppBar, Box, Button, Icon, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../core/context/AuthContext.tsx";

const Header = () => {
  const navigate = useNavigate();

  const {isUserAuthenticated} = useContext(AuthContext)!;

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Icon style={{marginRight: '10px'}}>home</Icon>
          <Typography variant="h6">
            Your Text Here
          </Typography>
        </Box>
        <Box display="flex">
          {!isUserAuthenticated() &&
            <>
              <Button color="inherit" style={{margin: '0 10px'}} onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button color="inherit" style={{margin: '0 10px'}} onClick={() => navigate('/register')}>
                Register
              </Button>
            </>
          }
          {isUserAuthenticated() &&
            <>
              <Button color="inherit" style={{margin: '0 10px'}} onClick={() => navigate('/authed')}>
                Authed
              </Button>
            </>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;