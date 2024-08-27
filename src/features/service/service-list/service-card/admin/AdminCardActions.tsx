import {Button, CardActions} from "@mui/material";

interface ServiceCardAdminActionsProps {
  handleOpen: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
}

const AdminCardActions = ({handleOpen, handleEdit, handleDelete}: ServiceCardAdminActionsProps) => {

  return (
    <CardActions sx={{justifyContent: "space-between"}}>
      <Button size="small" onClick={handleEdit}>
        Edit
      </Button>
      <Button size="small" onClick={handleOpen}>
        Staff
      </Button>
      <Button size="small" onClick={handleDelete}>
        Delete
      </Button>
    </CardActions>
  );
};

export default AdminCardActions;