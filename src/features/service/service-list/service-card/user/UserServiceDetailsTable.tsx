import {TableBody, TableCell, TableRow} from "@mui/material";
import {Service} from "../../../../../shared/models/service.types.ts";

interface ServiceDetailsTableProps {
  service: Service;
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
        <TableCell sx={{fontSize: "0.875rem"}}>{service.workSpace.name}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default UserServiceDetailsTable;