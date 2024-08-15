import {Box} from "@mui/material";
import {styled} from "@mui/system";
import {CoreHeader as SharedHeader} from "../../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../../shared/styles/subHeaders.ts";

export const MainWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
}));

export const Header = SharedHeader;

export const Subheader = SharedSubHeader;

export const Image = styled('img')(({theme}) => ({
  width: '100%',
  maxWidth: 600,
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
}));




