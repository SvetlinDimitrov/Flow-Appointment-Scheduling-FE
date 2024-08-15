import ContactForm from "./contanct_us_form/ContactForm.tsx";
import {
  ContactInfoWrapper,
  Email,
  FormWrapper,
  Header,
  MainWrapper,
  MapWrapper,
  SecondWrapper,
  SubHeading,
  Telephone
} from "./contanctUsStyle.ts";
import MapComponent from "./map/MapComponent.tsx";

const ContactUs = () => {
  const position: [number, number] = [51.505, -0.09];

  return (
    <MainWrapper>
      <Header variant="h4">
        Contact Us
      </Header>
      <ContactInfoWrapper>
        <Telephone variant="body1">Telephone: +123456789</Telephone>
        <Email variant="body1">Email: contact@example.com</Email>
      </ContactInfoWrapper>
      <SubHeading variant="body1" paragraph>
        We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </SubHeading>
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