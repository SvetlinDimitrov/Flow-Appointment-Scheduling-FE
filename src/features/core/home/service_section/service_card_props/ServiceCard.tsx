import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {cardContentStyle, mainRapperStyle} from "./serviceCardStyle.ts";

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  navigateTo: string;
}

const ServiceCard = ({image, alt, title, navigateTo}: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={mainRapperStyle}>
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt={alt}
      />
      <CardContent sx={cardContentStyle}>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Button variant="outlined" onClick={() => navigate(navigateTo)}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;