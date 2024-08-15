import {styled} from "@mui/system";
import {Button, Container} from "@mui/material";

export const StyledContainer = styled(Container)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '86.1vh',
  flexDirection: 'column',
  textAlign: 'center',
  padding: theme.spacing(3),
}));

export const StyledButton = styled(Button)(({theme}) => ({
  marginTop: theme.spacing(2),
  padding: '10px 20px',
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
}));