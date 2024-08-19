import {Button, CardActions} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface BookButtonProps {
  selectedServiceId: number;
  employeeId: number;
  employeeFirstName: string;
}

const UserCardActions = ({selectedServiceId, employeeId, employeeFirstName}: BookButtonProps) => {
  const navigate = useNavigate();

  return (
    <CardActions sx={{justifyContent: 'center'}}>
      <Button size={"small"} onClick={() => navigate(`/book/${selectedServiceId}/${employeeId}`)}>
        Book with {employeeFirstName}
      </Button>
    </CardActions>
  );
};

export default UserCardActions;