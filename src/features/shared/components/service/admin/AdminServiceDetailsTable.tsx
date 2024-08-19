import {TableBody, TableCell, TableRow} from "@mui/material";
import {ServiceWithUsers} from "../../../../../models/service.types.ts";

interface AdminServiceDetailsTableProps {
  service: ServiceWithUsers;
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
        <TableCell sx={{fontSize: "0.875rem"}}>{service.place.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{fontSize: "0.875rem"}}>Total Profit</TableCell>
        <TableCell sx={{fontSize: "0.875rem"}}>{service.totalProfit} $</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{fontSize: "0.875rem"}}>Total Appointments</TableCell>
        <TableCell sx={{fontSize: "0.875rem"}}>{service.totalAppointments}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default AdminServiceDetailsTable;