import {Box, Button, CardActions} from "@mui/material";
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
    <CardActions sx={{flexDirection: 'column', gap: 1}}>
      <Box sx={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <Button size="small" onClick={handleEdit} startIcon={<EditIcon/>}>
          Edit
        </Button>
        <Button size="small" onClick={handleOpen} startIcon={<GroupIcon/>}>
          Staff
        </Button>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <Button size="small" onClick={handleDelete} startIcon={<DeleteIcon/>}>
          Delete
        </Button>
        <Button size="small" onClick={handleAppointments} startIcon={<EventIcon/>}>
          Events
        </Button>
      </Box>
    </CardActions>
  );
};

export default AdminCardActions;