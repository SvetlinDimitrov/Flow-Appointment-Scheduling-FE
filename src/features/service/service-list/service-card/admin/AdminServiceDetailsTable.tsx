import {TableBody, TableCell, TableRow} from "@mui/material";
import {Service} from "../../../../../shared/models/service.types.ts";

interface AdminServiceDetailsTableProps {
  service: Service;
}

const AdminServiceDetailsTable = ({service}: AdminServiceDetailsTableProps) => {
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
      <TableRow>
        <TableCell sx={{fontSize: "0.875rem"}}>Total Profit</TableCell>
        <TableCell sx={{fontSize: "0.875rem"}}>1900 $</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{fontSize: "0.875rem"}}>Total Appointments</TableCell>
        <TableCell sx={{fontSize: "0.875rem"}}>190</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default AdminServiceDetailsTable;