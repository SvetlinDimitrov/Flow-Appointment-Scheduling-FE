import {AppBar, Toolbar, Typography, Box} from '@mui/material';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <AppBar position={'static'} sx={{
      top: 'auto',
      bottom: 0,
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}>
        <Typography variant={"body1"} color={"inherit"}>
          © 2024 Prime Holding
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="/contant-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant={"body1"} color={"inherit"}>
              Contact Us
            </Typography>
          </Link>
          <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant={"body1"} color={"inherit"}>
              About Us
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;