import {Button, CardActions} from "@mui/material";

interface UserCardActionsProps {
  selectedServiceId: number;
  employeeEmail: string;
  onDelete: (employeeEmail: string, selectedServiceId: number) => void;
}

const AdminCardActions = ({employeeEmail, selectedServiceId, onDelete}: UserCardActionsProps) => {
  return (
    <CardActions sx={{justifyContent: 'center'}}>
      <Button size={"small"} onClick={() => onDelete(employeeEmail, selectedServiceId)}>
        Unassign
      </Button>
    </CardActions>
  );
};

export default AdminCardActions;