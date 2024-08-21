import ContactForm from "./contact-us-form/ContactForm.tsx";
import MapComponent from "./map/MapComponent.tsx";
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import {CoreHeader as SharedHeader} from "../../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../../shared/styles/subHeaders.ts";

const MainWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: '1rem',
  height: '82.6vh',
  [theme.breakpoints.down('lg')]: {
    height: 'auto',
  },
}));

const SecondWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  height: '400px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: theme.spacing(5),
    height: 'auto',
  },
}));

const ContactInfoWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  margin: '1rem 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '0.3rem',
  },
}));

const MapWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flex: 1,
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

const FormWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flex: 1,
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

const ContactUs = () => {
  const position: [number, number] = [51.505, -0.09];

  return (
    <MainWrapper>
      <SharedHeader variant={"h4"}>
        Contact Us
      </SharedHeader>
      <ContactInfoWrapper>
        <Typography variant={"body1"} fontSize={'1rem'} color={'#333'}>
          Telephone: +123456789
        </Typography>
        <Typography variant={"body1"} fontSize={'1rem'} color={'#333'}>
          Email: contact@example.com
        </Typography>
      </ContactInfoWrapper>
      <SharedSubHeader variant={"body1"} paragraph color={'#666'} textAlign={'center'}>
        We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </SharedSubHeader>
      <SecondWrapper>
        <MapWrapper>
          <MapComponent position={position}/>
        </MapWrapper>
        <FormWrapper>
          <ContactForm/>
        </FormWrapper>
      </SecondWrapper>
    </MainWrapper>
  );
};

export default ContactUs;