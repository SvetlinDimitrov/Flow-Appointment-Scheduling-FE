import {Typography} from '@mui/material';
import {StyledAppBar, StyledToolbar} from './footerStyles';

const Footer = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography variant="body1" color="inherit">
          © 2024 Prime Holding
        </Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Footer;