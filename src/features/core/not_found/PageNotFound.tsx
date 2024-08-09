import { Container, Typography } from '@mui/material';

const PageNotFound = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="p">
        Page Not Found
      </Typography>
    </Container>
  );
};

export default PageNotFound;