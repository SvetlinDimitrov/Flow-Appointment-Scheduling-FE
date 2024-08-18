import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ServiceWithUsers} from "../../../../models/service.types.ts";

interface EmployeeCardProps {
  employee: ServiceWithUsers["employees"][0];
  selectedServiceId: number;
}

const EmployeeCard = ({employee, selectedServiceId}: EmployeeCardProps) => {
  const navigate = useNavigate();

  return (
    <Box key={employee.id}>
      <Card>
        <CardContent sx={{maxWidth:'250px'}}>
          <Typography variant={"h6"} fontWeight={'bold'}>
            {employee.firstName} {employee.lastName}
          </Typography>
          <Typography variant={"body2"} color={'gray'} mt={1}>
            {employee.email}
          </Typography>
          <Typography variant={"body2"} color={'gray'} mt={1}>
            {employee.role}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
          <Button size={"small"} onClick={() => navigate(`/book/${selectedServiceId}/${employee.id}`)}>
            Book with {employee.firstName}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default EmployeeCard;