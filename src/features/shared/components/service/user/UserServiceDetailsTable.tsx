import {TableBody, TableCell, TableRow} from "@mui/material";
import {ServiceWithUsers} from "../../../../../models/service.types.ts";

interface ServiceDetailsTableProps {
  service: ServiceWithUsers;
}

const UserServiceDetailsTable = ({service}: ServiceDetailsTableProps) => {
  return (
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
  );
};

export default UserServiceDetailsTable;