import {Typography} from '@mui/material';
import {StyledButton, StyledContainer} from './pageNotFoundStyles.ts';
import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <StyledContainer>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Page Not Found
      </Typography>
      <StyledButton onClick={handleGoHome}>
        Go Home
      </StyledButton>
    </StyledContainer>
  );
};

export default PageNotFound;