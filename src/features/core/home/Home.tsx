import {Container, Typography} from '@mui/material';
import {UserContext} from "../../shared/context/UserContext.tsx";
import {useContext} from "react";
import {AuthContext} from "../../shared/context/AuthContext.tsx";

const Home = () => {

  const {user} = useContext(UserContext)!;
  const {isUserAuthenticated} = useContext(AuthContext)!;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        This is home page
      </Typography>
      {isUserAuthenticated() &&
        <Typography variant="body1">
          User: {JSON.stringify(user)}
        </Typography>
      }
    </Container>
  );
};

export default Home;