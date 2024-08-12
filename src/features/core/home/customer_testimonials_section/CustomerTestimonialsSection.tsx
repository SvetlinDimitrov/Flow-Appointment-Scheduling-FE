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
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F12%2FUser_icon_2.svg%2F1024px-User_icon_2.svg.png&f=1&nofb=1&ipt=abdae6368a4f9b7600c5e567b4ef520b6bffee9955df07b00828eefb2dc57658&ipo=images',
    clientName: 'John Doe',
  },
  {
    text: '“Booking appointments is so easy and convenient with Flow\'s online system.”',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F12%2FUser_icon_2.svg%2F1024px-User_icon_2.svg.png&f=1&nofb=1&ipt=abdae6368a4f9b7600c5e567b4ef520b6bffee9955df07b00828eefb2dc57658&ipo=images',
    clientName: 'Jane Smith',
  },
  {
    text: '“The staff at Flow are incredibly friendly and professional. Highly recommend!”',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F12%2FUser_icon_2.svg%2F1024px-User_icon_2.svg.png&f=1&nofb=1&ipt=abdae6368a4f9b7600c5e567b4ef520b6bffee9955df07b00828eefb2dc57658&ipo=images',
    clientName: 'Alice Johnson',
  },
  {
    text: '“Flow\'s environment is so relaxing and welcoming. I always look forward to my visits.”',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F12%2FUser_icon_2.svg%2F1024px-User_icon_2.svg.png&f=1&nofb=1&ipt=abdae6368a4f9b7600c5e567b4ef520b6bffee9955df07b00828eefb2dc57658&ipo=images',
    clientName: 'Michael Brown',
  },
  {
    text: '“The personalized wellness solutions at Flow have greatly improved my quality of life.”',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F12%2FUser_icon_2.svg%2F1024px-User_icon_2.svg.png&f=1&nofb=1&ipt=abdae6368a4f9b7600c5e567b4ef520b6bffee9955df07b00828eefb2dc57658&ipo=images',
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