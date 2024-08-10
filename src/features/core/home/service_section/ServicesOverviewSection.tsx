import {Box, Button, Card, CardContent, CardMedia, Stack, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const ServicesOverviewSection = () => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ alignItems: 'center' , mt: '4rem'}} gap={5}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#333' }}>
        Our Services
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', color: '#666' }}>
        We offer a variety of services to cater to your wellness needs, from fitness classes to massage therapy and
        skincare treatments.
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 20}}>
        <Card sx={{flex: '1 1 300px', maxWidth: '360px'}}>
          <CardMedia
            component="img"
            height="350"
            image="https://boxlifemagazine.com/wp-content/uploads/2023/04/image-8.jpeg"
            sx={{objectFit: 'cover'}}
            alt="Fitness Classes"
          />
          <CardContent sx={{textAlign: 'center'}}>
            <Typography variant="h6" component="h3" gutterBottom>
              Fitness Classes
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/services/fitness-classes')}>
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card sx={{flex: '1 1 300px', maxWidth: '360px'}}>
          <CardMedia
            component="img"
            height="350"
            image="https://florida-academy.edu/wp-content/uploads/2019/11/MassageTherapyFAQs-FloridaAcademy.jpeg"
            alt="Massage Therapy"
          />
          <CardContent sx={{textAlign: 'center'}}>
            <Typography variant="h6" component="h3" gutterBottom>
              Massage Therapy
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/services/massage-therapy')}>
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card sx={{flex: '1 1 300px', maxWidth: '360px'}}>
          <CardMedia
            component="img"
            height="350"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgumlet.assettype.com%2Ffreepressjournal%2F2023-03%2F92967be8-b607-4e37-9f21-50d09f14a790%2Fwinter_skincare_2022_natural_ingredients_at_home.jpg&f=1&nofb=1&ipt=8e36e3ddc2e6daa25887752c1811c0ccb60be37eb4ef112d52936953ae5501da&ipo=images"
            alt="Skincare Treatments"
          />
          <CardContent sx={{textAlign: 'center'}}>
            <Typography variant="h6" component="h3" gutterBottom>
              Skincare Treatments
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/services/skincare-treatments')}>
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
};

export default ServicesOverviewSection;