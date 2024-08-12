import { Container, Typography, Button } from '@mui/material';
import { containerStyles, buttonStyles } from './pageNotFoundStyles.ts';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container sx={containerStyles}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Page Not Found
      </Typography>
      <Button sx={buttonStyles} onClick={handleGoHome}>
        Go Home
      </Button>
    </Container>
  );
};

export default PageNotFound;