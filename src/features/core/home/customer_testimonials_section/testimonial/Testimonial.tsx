import {Avatar, Box, Typography} from '@mui/material';
import {
  avatarStyle,
  clientNameAndAvatarWrapperStyle,
  clientNameStyle,
  mainParagraphStyle,
  mainWrapperStyle
} from "./testimonialStyle.ts";

interface TestimonialProps {
  text: string;
  image: string;
  clientName: string;
}

const Testimonial = ({ text, image, clientName }: TestimonialProps) => {
  return (
    <Box sx={mainWrapperStyle}>
      <Typography variant="body1" sx={mainParagraphStyle}>
    {text}
  </Typography>
      <Box sx={clientNameAndAvatarWrapperStyle}>
        <Avatar alt={clientName} src={image} sx={avatarStyle}/>
        <Typography variant="body2" sx={clientNameStyle}>
      {clientName}
    </Typography>
  </Box>
</Box>
  );
};

export default Testimonial;