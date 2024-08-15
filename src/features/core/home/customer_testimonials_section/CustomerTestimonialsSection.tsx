import Testimonial from "./testimonial/Testimonial.tsx";
import {useNavigate} from "react-router-dom";
import {AboutUsNavigationButton, Header, MainWrapper, TestimonialWrapper} from "./customerTestimonialsSectionStyle.ts";

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
    <MainWrapper>
      <Header variant="h4">
        Why Choose Flow?
      </Header>
      <TestimonialWrapper>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}
                       text={testimonial.text}
                       image={testimonial.image}
                       clientName={testimonial.clientName}/>
        ))}
      </TestimonialWrapper>
      <AboutUsNavigationButton variant="contained" color="primary"
              onClick={() => navigate('/about-us')}>
        About Us
      </AboutUsNavigationButton>
    </MainWrapper>
  );
};

export default CustomerTestimonialsSection;