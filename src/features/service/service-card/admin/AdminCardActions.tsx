import {Button, CardActions} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';

interface ServiceCardAdminActionsProps {
  handleOpen: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  handleAppointments: () => void;
}

const AdminCardActions = ({handleOpen, handleEdit, handleDelete, handleAppointments}: ServiceCardAdminActionsProps) => {
  return (
    <CardActions sx={{justifyContent: "space-between"}}>
      <Button size="small" onClick={handleEdit} startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button size="small" onClick={handleOpen} startIcon={<GroupIcon />}>
        Staff
      </Button>
      <Button size="small" onClick={handleDelete} startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button size="small" onClick={handleAppointments} startIcon={<EventIcon />}>
        Events
      </Button>
    </CardActions>
  );
};

export default AdminCardActions;