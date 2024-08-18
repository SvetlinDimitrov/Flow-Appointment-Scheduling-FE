import {styled} from "@mui/system";
import {Typography} from "@mui/material";

export const CoreHeader = styled(Typography)(({theme}) => ({
  fontWeight: 'bold',
  fontSize: '2rem',
  lineHeight: '1.2',
  [theme.breakpoints.up('xs')]: {
    fontSize: '2rem',
    lineHeight: '1.2',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
    lineHeight: '1.5',
  },
}));


