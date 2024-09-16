import {Button, CardActions} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';

interface ServiceCardUserActionsProps {
  handleOpen: () => void;
}

const UserCardActions = ({handleOpen}: ServiceCardUserActionsProps) => {
  return (
    <CardActions sx={{justifyContent: "center"}}>
      <Button size="small" onClick={handleOpen} startIcon={<BookIcon />}>
        Book Now
      </Button>
    </CardActions>
  );
};

export default UserCardActions;