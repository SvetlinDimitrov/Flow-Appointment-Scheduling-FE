import {Box, Button} from "@mui/material";
import {styled} from "@mui/system";
import {CoreHeader as SharedHeader} from "../../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../../shared/styles/subHeaders.ts";

export const MainWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(4),
  padding: theme.spacing(2),
}));

export const Header = SharedHeader;

export const Subheader = SharedSubHeader;

export const TeamMembersWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

export const JoinOurTeamButton = styled(Button)(({theme}) => ({
  marginTop: theme.spacing(4),
}));
