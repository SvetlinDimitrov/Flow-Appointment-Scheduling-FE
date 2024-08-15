import {UserMainWrapper, UserSecondWrapper} from "../../shared/styles/wrappers.ts";
import {styled} from "@mui/system";
import {Box, Button} from "@mui/material";

export const MainWrapper = UserMainWrapper;

export const SecondWrapper = styled(UserSecondWrapper)(() => ({
  width: '100%',
}));

export const StyleButton = styled(Button)(() => ({
  flexGrow: 1,
}));

export const BoxButtonWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));