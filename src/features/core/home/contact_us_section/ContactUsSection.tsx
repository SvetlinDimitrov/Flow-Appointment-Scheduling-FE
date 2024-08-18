import ContactForm from "./contanct_us_form/ContactForm.tsx";
import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {CoreHeader as SharedHeader} from "../../../shared/styles/headers.ts";
import {CoreSubHeader as SharedSubHeader} from "../../../shared/styles/subHeaders.ts";

const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  padding: '1rem',
}));

const ContactUsSection = () => {
  return (
    <MainWrapper>
      <SharedHeader variant={"h4"}>
        Contact Us
      </SharedHeader>
      <SharedSubHeader variant={"body1"} color={'#666'} paragraph>
        We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </SharedSubHeader>
      <ContactForm/>
    </MainWrapper>
  );
};

export default ContactUsSection;