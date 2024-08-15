import {styled} from "@mui/system";
import {Box, Button} from "@mui/material";

export const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '500px',
  gap: '0.9rem',
}));

export const ContactUsButton = styled(Button)(() => ({
  marginTop: '2rem',
  paddingX: '4rem',
  paddingY: '1.5rem',
  fontSize: '1rem',
  margin: 'auto',
}));