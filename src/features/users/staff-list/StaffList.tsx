import {useState} from "react";
import {Box, Button, Typography, useMediaQuery} from "@mui/material";
import {ServiceWithUsers} from "../../../shared/models/service.types.ts";
import StaffCard from "./staff-card/StaffCard.tsx";
import {AdminStaffCardProps, UserStaffCardProps} from "../../../shared/models/user.types.ts";

interface StaffListProps {
  selectedService: ServiceWithUsers | null;
  handleBookWithStaff: ((staffEmail: string, serviceId: number) => void) | null;
  handleDeleteEmployeeFromService: ((staffEmail: string, serviceId: number) => void) | null;
}

const StaffList = (
  {selectedService, handleDeleteEmployeeFromService, handleBookWithStaff}: StaffListProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const isXs = useMediaQuery('(max-width:600px)');
  const isLg = useMediaQuery('(max-width:1200px)');
  const employeesPerPage = isXs ? 1 : isLg ? 6 : 10;

  if (!selectedService) return null;

  const totalPages = Math.ceil(selectedService.employees.length / employeesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * employeesPerPage;
  const endIndex = startIndex + employeesPerPage;
  const currentEmployees = selectedService.employees.slice(startIndex, endIndex);

  return (
    <Box p={2} display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        Our Experts for {selectedService.name}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2}
      maxWidth={'1200px'}>
        {currentEmployees.map((employee) => {
          if (handleDeleteEmployeeFromService) {
            const adminProps: AdminStaffCardProps = {
              employee,
              handleDeleteEmployeeFromService: () => handleDeleteEmployeeFromService!(employee.email, selectedService.id)
            };
            return <StaffCard key={employee.id} {...adminProps} />;
          } else if (handleBookWithStaff) {
            const userProps: UserStaffCardProps = {
              employee,
              handleBookWithStaff: () => handleBookWithStaff!(employee.email, selectedService.id)
            };
            return <StaffCard key={employee.id} {...userProps} />;
          } else {
            return null;
          }
        })}
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mt={2}>
        <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </Button>
        <Typography variant={"body2"}>
          {currentPage + 1} / {totalPages}
        </Typography>
        <Button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StaffList;