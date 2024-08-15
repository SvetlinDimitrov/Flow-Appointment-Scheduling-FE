import {styled} from '@mui/system';
import {Button, Typography} from "@mui/material";
import {UserMainWrapper, UserSecondWrapper} from "../../shared/styles/wrappers.ts";

export const MainWrapper = UserMainWrapper;

export const SecondWrapper = UserSecondWrapper;

export const Title = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(2),
}));

export const RegisterLink = styled(Typography)(({theme}) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

export const LoginButton = styled(Button)(({theme}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));