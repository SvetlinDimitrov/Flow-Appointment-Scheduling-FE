import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/path/to/your/image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flow: Your Wellness Journey Starts Here
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Book Appointments for Fitness, Spa, and Wellness Services with Ease
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/appointments')}
        >
          Book Now
        </Button>
      </Box>

      {/* Services Overview Section */}
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          We offer a variety of services to cater to your wellness needs, from fitness classes to massage therapy and skincare treatments.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/path/to/fitness-class.jpg" alt="Fitness Classes" style={{ width: '100%' }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Fitness Classes
              </Typography>
              <Button variant="outlined" onClick={() => navigate('/services/fitness-classes')}>
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/path/to/massage-therapy.jpg" alt="Massage Therapy" style={{ width: '100%' }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Massage Therapy
              </Typography>
              <Button variant="outlined" onClick={() => navigate('/services/massage-therapy')}>
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/path/to/skincare-treatment.jpg" alt="Skincare Treatments" style={{ width: '100%' }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Skincare Treatments
              </Typography>
              <Button variant="outlined" onClick={() => navigate('/services/skincare-treatments')}>
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Customer Testimonials/Why Choose Us Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Why Choose Flow?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              “Flow has transformed my wellness routine – their services are top-notch!” – [Client Name]
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              “Booking appointments is so easy and convenient with Flow's online system.” – [Client Name]
            </Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={() => navigate('/testimonials')}>
          Read More Testimonials
        </Button>
      </Box>
    </Container>
  );
};

export default Home;