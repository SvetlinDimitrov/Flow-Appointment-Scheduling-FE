import {Button, CardMedia, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {CardContentStyle, MainWrapper} from "./serviceCardStyle.ts";

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  navigateTo: string;
}

const ServiceCard = ({image, alt, title, navigateTo}: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt={alt}
      />
      <CardContentStyle>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Button variant="outlined" onClick={() => navigate(navigateTo)}>
          Learn More
        </Button>
      </CardContentStyle>
    </MainWrapper>
  );
};

export default ServiceCard;