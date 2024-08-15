import ContactForm from "./contanct_us_form/ContactForm.tsx";
import {Header, MainWrapper, SubHeading} from "./contanctUsStyle.ts";

const ContactUsSection = () => {
  return (
    <MainWrapper>
      <Header variant="h4">
        Contact Us
      </Header>
      <SubHeading variant="body1" paragraph>
        We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </SubHeading>
      <ContactForm/>
    </MainWrapper>
  );
};

export default ContactUsSection;