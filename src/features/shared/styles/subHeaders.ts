import {styled} from "@mui/system";
import {Typography} from "@mui/material";

export const CoreSubHeader = styled(Typography)(({theme}) => ({
  fontSize: '1.1rem',
  lineHeight: 1.5,
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.4rem',
  },
}));
