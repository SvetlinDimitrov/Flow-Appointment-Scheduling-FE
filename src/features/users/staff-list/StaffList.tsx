import {Box, Button, Typography, useMediaQuery} from "@mui/material";
import StaffCard from "./staff-card/StaffCard.tsx";
import {AdminStaffCardProps, User, UserStaffCardProps} from "../../../shared/models/user.types.ts";
import usePaginatedQuery from "../../../hooks/custom/usePaginatedQuery.ts";
import LoadingSpinner from "../../../shared/core/loading/LoadingSpinner.tsx";
import PageNotFound from "../../../shared/core/not-found/PageNotFound.tsx";
import {Service} from "../../../shared/models/service.types.ts";
import useGetUsersByServiceId from "../../../hooks/users/query/useGetUsersByServiceId.ts";

interface StaffListProps {
  selectedService: Service;
  handleBookWithStaff: ((staffEmail: string, serviceId: number) => void) | null;
  handleDeleteEmployeeFromService: ((staffEmail: string, serviceId: number) => void) | null;
}

const StaffList = (
  {
    selectedService,
    handleDeleteEmployeeFromService,
    handleBookWithStaff
  }: StaffListProps) => {
  const isXs = useMediaQuery('(max-width:600px)');
  const isLg = useMediaQuery('(max-width:1200px)');

  const employeesPerPage = isXs ? 1 : isLg ? 6 : 10;

  const {
    data,
    isLoading,
    error,
    page,
    handleNextPage,
    handlePreviousPage,
  } = usePaginatedQuery<User>(useGetUsersByServiceId, 0, employeesPerPage, selectedService.id);


  if (isLoading) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;


  return (
    <Box p={2} display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        Our Experts for {selectedService.name}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2}
      maxWidth={'1200px'}>
        {data?.content?.map((employee) => {
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
        <Button onClick={handlePreviousPage} disabled={page === 0}>
          Previous
        </Button>
        <Typography variant={"body2"}>
          {page + 1} / {data?.totalPages}
        </Typography>
        <Button onClick={handleNextPage} disabled={data && page >= data.totalPages - 1}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StaffList;