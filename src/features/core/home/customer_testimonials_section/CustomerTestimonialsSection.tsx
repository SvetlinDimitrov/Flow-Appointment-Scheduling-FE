import {Box, Button, Typography} from '@mui/material';
import Testimonial from "./testimonial/Testimonial.tsx";
import {useNavigate} from "react-router-dom";

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
    <Box sx={{
      position: 'relative',
      py: 8,
      textAlign: 'center',
      px: 2,
      backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finstyledecoparis.com%2Fwp-content%2Fuploads%2F2021%2F10%2F3d-rendering-modern-loft-gym-and-fitness-N8JNRLH-1.jpg&f=1&nofb=1&ipt=e72ca8d3257bcd78367eca0223ba6e28147e6c801395c2571ab1718966b42922&ipo=images)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 6,
      alignItems: 'center',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
      },
      '& > *': {
        position: 'relative',
        zIndex: 2,
      },
    }}>
      <Typography variant="h4" component="h2" gutterBottom
                  sx={{fontWeight: 'bold', fontSize: '2.5rem', color: 'white', mb: 4}}>
        Why Choose Flow?
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}
                       text={testimonial.text}
                       image={testimonial.image}
                       clientName={testimonial.clientName}/>
        ))}
      </Box>
      <Button variant="contained" color="primary" sx={{mt: 2, px: 2, py: 1, fontSize: '1rem'}}
              onClick={() => navigate('/about-us')}>
        About Us
      </Button>
    </Box>
  );
};

export default CustomerTestimonialsSection;