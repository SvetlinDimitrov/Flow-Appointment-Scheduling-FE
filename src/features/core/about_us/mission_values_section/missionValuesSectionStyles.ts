import {Box} from "@mui/material";
import {styled} from "@mui/system";
import {CoreHeader as SharedHeader} from "../../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../../shared/styles/subHeaders.ts";

export const MainWrapper = styled(Box)(() => ({
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  width: '100%',
}));

export const SecondaryWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(4),
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const MissionValueWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(5),
  marginTop: theme.spacing(4),
}));

export const Header = SharedHeader;

export const Subheader = SharedSubHeader;