import {Box, Button, Typography} from '@mui/material';
import Testimonial from "./testimonial/Testimonial.tsx";
import {useNavigate} from "react-router-dom";
import {
  aboutUsNavigationStyle,
  mainHeadingStyle,
  mainWrapperStyle,
  testimonialWrapperStyle
} from "./customerTestimonialsSectionStyle.ts";

const testimonials = [
  {
    text: '“Flow has transformed my wellness routine – their services are top-notch!”',
    image: '/static/images/home/customer_user_icon.png',
    clientName: 'John Doe',
  },
  {
    text: '“Booking appointments is so easy and convenient with Flow\'s online system.”',
    image: '/static/images/home/customer_user_icon.png',
    clientName: 'Jane Smith',
  },
  {
    text: '“The staff at Flow are incredibly friendly and professional. Highly recommend!”',
    image: '/static/images/home/customer_user_icon.png',
    clientName: 'Alice Johnson',
  },
  {
    text: '“Flow\'s environment is so relaxing and welcoming. I always look forward to my visits.”',
    image: '/static/images/home/customer_user_icon.png',
    clientName: 'Michael Brown',
  },
  {
    text: '“The personalized wellness solutions at Flow have greatly improved my quality of life.”',
    image: '/static/images/home/customer_user_icon.png',
    clientName: 'Emily Davis',
  },
];

const CustomerTestimonialsSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={mainWrapperStyle}>
      <Typography variant="h4" component="h2" sx={mainHeadingStyle}>
        Why Choose Flow?
      </Typography>
      <Box sx={testimonialWrapperStyle}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}
                       text={testimonial.text}
                       image={testimonial.image}
                       clientName={testimonial.clientName}/>
        ))}
      </Box>
      <Button variant="contained" color="primary" sx={aboutUsNavigationStyle}
              onClick={() => navigate('/about-us')}>
        About Us
      </Button>
    </Box>
  );
};

export default CustomerTestimonialsSection;