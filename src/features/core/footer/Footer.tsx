import {AppBar, Toolbar, Typography} from '@mui/material';

const Footer = () => {
  return (
    <AppBar position={'static'} sx={{
      top: 'auto',
      bottom: 0,
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Typography variant={"body1"} color={"inherit"}>
          © 2024 Prime Holding
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;