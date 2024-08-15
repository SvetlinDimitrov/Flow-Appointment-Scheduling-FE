import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {CoreHeader as SharedHeader} from "../../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../../shared/styles/subHeaders.ts";

export const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  padding: '1rem',
}));

export const Header = SharedHeader;

export const SubHeading = styled(SharedSubHeader)(() => ({
  color: '#666',
}));