import {Button, CardActions} from "@mui/material";

interface ServiceCardUserActionsProps {
  handleOpen: () => void;
}

const UserCardActions = ({handleOpen}: ServiceCardUserActionsProps) => {

  return (
    <CardActions sx={{justifyContent: "center"}}>
      <Button size="small" onClick={handleOpen}>
        Book Now
      </Button>
    </CardActions>
  );
};

export default UserCardActions;