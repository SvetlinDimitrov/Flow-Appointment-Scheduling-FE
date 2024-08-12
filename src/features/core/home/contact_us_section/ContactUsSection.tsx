import {Box, Typography} from '@mui/material';
import ContactForm from "./contanct_us_form/ContactForm.tsx";

const ContactUsSection = () => {
  return (
    <Box sx={{
      py: 8,
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      px: 2,
      gap: 4,
    }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{fontWeight: 'bold', fontSize: '2.5rem', color: '#333'}}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph sx={{fontSize: '1.25rem', color: '#666'}}>
        We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </Typography>
      <ContactForm/>
    </Box>
  );
};

export default ContactUsSection;