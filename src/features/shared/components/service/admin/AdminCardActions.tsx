import {Button, CardActions} from "@mui/material";
import {ServiceWithUsers} from "../../../../../models/service.types.ts";

interface ServiceCardAdminActionsProps {
  service: ServiceWithUsers;
  handleOpen: (service: ServiceWithUsers) => void;
  handleEdit: (service: ServiceWithUsers) => void;
  handleDelete: (service: ServiceWithUsers) => void;
}

const AdminCardActions = ({service, handleOpen, handleEdit, handleDelete}: ServiceCardAdminActionsProps) => {

  return (
    <CardActions sx={{justifyContent: "space-between"}}>
      <Button size="small" onClick={() => handleEdit(service)}>
        Edit
      </Button>
      <Button size="small" onClick={() => handleOpen(service)}>
        Employees
      </Button>
      <Button size="small" onClick={() => handleDelete(service)}>
        Delete
      </Button>
    </CardActions>
  );
};

export default AdminCardActions;