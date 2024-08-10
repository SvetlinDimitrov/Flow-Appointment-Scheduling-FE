import { Container, Typography } from '@mui/material';
import {containerStyles} from "./pageNotFoundStyles.ts";

const PageNotFound = () => {
  return (
    <Container sx={containerStyles}>
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