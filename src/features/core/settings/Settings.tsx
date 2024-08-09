import {Box, Button, Grid, Paper, TextField, Typography} from '@mui/material';
import useGetUserQuery from "../../../hooks/users/useGetUserQuery.ts";
import {useContext} from "react";
import {UserContext} from "../../shared/context/UserContext.tsx";
import {useNavigate} from "react-router-dom";
import LoadingSpinner from "../loading/LoadingSpinner.tsx";
import PageNotFound from "../not_found/PageNotFound.tsx";

const Settings = () => {

  const {userId} = useContext(UserContext)!;

  const navigate = useNavigate();

  if (!userId) return navigate('/login');

  const {data: user, isLoading, error} = useGetUserQuery(userId);

  if (isLoading) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;

  return (
    <Paper sx={{
      padding: 7,
      maxWidth: 500,
      borderRadius: 3,
    }} elevation={4}>
      <Box sx={{mt: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Settings
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={user?.firstName}
                InputProps={{readOnly: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={user?.lastName}
                InputProps={{readOnly: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={user?.email}
                InputProps={{readOnly: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Role"
                variant="outlined"
                name="role"
                value={user?.role}
                InputProps={{readOnly: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Update
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default Settings;