import {AppBar, Box, Button, Typography} from "@mui/material";
import {styled} from "@mui/system";

export const StyledAppBar = styled(AppBar)(() => ({
  position: 'sticky',
}));

export const StyledTypography = styled(Typography)(({theme}) => ({
  flexGrow: 1,
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
}));

export const StyledButton = styled(Button)(() => ({
  margin: '0 10px',
}));

export const HorizontalLinks = styled(Box)(({theme}) => ({
  flexDirection: 'row',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },

}));