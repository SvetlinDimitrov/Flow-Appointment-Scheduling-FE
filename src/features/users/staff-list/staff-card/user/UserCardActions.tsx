import {Button, CardActions} from "@mui/material";

interface BookButtonProps {
  bookWithStaff: () => void;
  employeeFirstName: string;
}

const UserCardActions = ({bookWithStaff, employeeFirstName}: BookButtonProps) => {

  return (
    <CardActions sx={{justifyContent: 'center'}}>
      <Button size={"small"} onClick={bookWithStaff}>
        Book with {employeeFirstName}
      </Button>
    </CardActions>
  );
};

export default UserCardActions;