import {AppBar, Toolbar} from "@mui/material";
import {styled} from "@mui/system";

export const StyledAppBar = styled(AppBar)(() => ({
  position: 'static',
  top: 'auto',
  bottom: 0,
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));