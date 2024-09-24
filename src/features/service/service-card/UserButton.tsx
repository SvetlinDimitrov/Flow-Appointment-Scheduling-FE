import {Grid, Button} from "@mui/material";

interface UserButtonProps {
  handleViewEmployees: () => void;
}

const UserButton = ({handleViewEmployees}: UserButtonProps) => (
  <Grid container spacing={2} justifyContent="center">
    <Grid item>
      <Button variant="contained" color="primary" onClick={handleViewEmployees}>Staff</Button>
    </Grid>
  </Grid>
);

export default UserButton;