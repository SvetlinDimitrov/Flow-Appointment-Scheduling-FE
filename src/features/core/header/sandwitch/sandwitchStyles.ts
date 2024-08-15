import {styled} from "@mui/system";
import {Button} from "@mui/material";

export const StyledButton = styled(Button)(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));