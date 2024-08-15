import {Typography} from '@mui/material';
import {StyledAppBar, StyledToolbar} from './footerStyles';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography variant="body1" color="inherit">
          © 2024 Prime Holding
        </Typography>
        <Link to="/about-us" style={{ marginLeft: '20px', color: 'inherit', textDecoration: 'none' }}>
          About Us
        </Link>
        <Link to="/contant-us" style={{ marginLeft: '20px', color: 'inherit', textDecoration: 'none' }}>
          Contacts
        </Link>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Footer;