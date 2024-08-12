import {Box, Typography} from '@mui/material';
import ContactForm from "./contanct_us_form/ContactForm.tsx";
import {mainHeadingStyle, mainWrapperStyle, subHeadingStyle} from "./contanctUsStyle.ts";

const ContactUsSection = () => {
  return (
    <Box sx={mainWrapperStyle}>
      <Typography variant="h4" component="h2" sx={mainHeadingStyle}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph sx={subHeadingStyle}>
        We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </Typography>
      <ContactForm/>
    </Box>
  );
};

export default ContactUsSection;