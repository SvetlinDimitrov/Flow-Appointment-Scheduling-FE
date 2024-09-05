import {Button, Container, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {styled} from "@mui/system";

const StyledContainer = styled(Container)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '86.1vh',
  flexDirection: 'column',
  textAlign: 'center',
  padding: theme.spacing(3),
}));

const StyledButton = styled(Button)(({theme}) => ({
  marginTop: theme.spacing(2),
  padding: '10px 20px',
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
}));

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <StyledContainer>
      <Typography variant={"h2"} component={"h1"} gutterBottom>
        404
      </Typography>
      <Typography variant={"h5"} component={"p"} gutterBottom>
        Page Not Found
      </Typography>
      <StyledButton onClick={handleGoHome}>
        Go Home
      </StyledButton>
    </StyledContainer>
  );
};

export default PageNotFound;