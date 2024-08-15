import {Box} from "@mui/material";
import {styled} from "@mui/system";

export const MainWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));