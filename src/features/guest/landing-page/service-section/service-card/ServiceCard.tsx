import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  navigateTo: string;
  buttonText: string;
}

const ServiceCard = ({image, alt, title, navigateTo , buttonText}: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{
      width: '100%',
      maxWidth: '450px',
    }}>
      <CardMedia
        component={"img"}
        height={"350"}
        image={image}
        alt={alt}
      />
      <CardContent sx={{
        textAlign: 'center',
      }}>
        <Typography variant={"h5"} gutterBottom>
          {title}
        </Typography>
        <Button variant="outlined" onClick={() => navigate(navigateTo)}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;