import {AvatarStyle, ClientName, ClientNameAndAvatarWrapper, MainParagraph, MainWrapper} from "./testimonialStyle.ts";

interface TestimonialProps {
  text: string;
  image: string;
  clientName: string;
}

const Testimonial = ({ text, image, clientName }: TestimonialProps) => {
  return (
    <MainWrapper>
      <MainParagraph variant="body1">
    {text}
      </MainParagraph>
      <ClientNameAndAvatarWrapper>
        <AvatarStyle alt={clientName} src={image}/>
        <ClientName variant="body2">
          {clientName}
        </ClientName>
      </ClientNameAndAvatarWrapper>
    </MainWrapper>
  );
};

export default Testimonial;