import {Button, CardActions} from "@mui/material";
import {ServiceWithUsers} from "../../../../../models/service.types.ts";

interface ServiceCardUserActionsProps {
  service: ServiceWithUsers;
  handleOpen: (service: ServiceWithUsers) => void;
}

const UserCardActions = ({service , handleOpen}: ServiceCardUserActionsProps) => {

  return (
    <CardActions sx={{justifyContent: "center"}}>
      <Button size="small" onClick={() => handleOpen(service)}>
        Book Now
      </Button>
    </CardActions>
  );
};

export default UserCardActions;