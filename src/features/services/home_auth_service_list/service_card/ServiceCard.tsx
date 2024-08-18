import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from "@mui/material";
import {ServiceWithUsers} from "../../../../models/service.types.ts";

interface ServiceCardProps {
  service: ServiceWithUsers;
  handleOpen: (service: ServiceWithUsers) => void;
}

const ServiceCard = ({service, handleOpen}: ServiceCardProps) => {
  return (
    <Box>
      <Card sx={{maxWidth: 345, margin: "auto", boxShadow: 3}}>
        <CardContent>
          <Typography variant={"h6"} fontWeight={'bold'} textAlign={'center'}>
            {service.name}
          </Typography>
          <Typography
            variant={"body2"} maxWidth={300} margin={"auto"} textAlign={"center"}
            color={"gray"} fontStyle={"italic"} marginTop={1}
          >
            {service.description}
          </Typography>
          <TableContainer component={Paper} sx={{marginTop: 2}}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{fontSize: "0.875rem"}}>Duration</TableCell>
                  <TableCell sx={{fontSize: "0.875rem"}}>{service.duration} min</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{fontSize: "0.875rem"}}>Price</TableCell>
                  <TableCell sx={{fontSize: "0.875rem"}}>{service.price} $</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{fontSize: "0.875rem"}}>Place</TableCell>
                  <TableCell sx={{fontSize: "0.875rem"}}>{service.place.name}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions sx={{justifyContent: "center"}}>
          <Button size="small" onClick={() => handleOpen(service)}>
            Book Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ServiceCard;