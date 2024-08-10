import { AppBar, Toolbar, Typography } from '@mui/material';
import { appBarStyles, toolbarStyles } from './footerStyles';

const Footer = () => {
  return (
    <AppBar sx={appBarStyles}>
      <Toolbar sx={toolbarStyles}>
        <Typography variant="body1" color="inherit">
          © 2024 Prime Holding
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;