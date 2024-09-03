import {Box, Pagination, Typography, useMediaQuery, useTheme} from "@mui/material";
import StaffCard from "./staff-card/StaffCard.tsx";
import {User} from "../../../shared/models/user.types.ts";
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
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const employeesPerPage = isXs ? 1 : 2;

  const {
    data,
    isLoading,
    error,
    page,
    handlePageChange
  } = usePaginatedQuery<User>(useGetUsersByServiceId, 0, employeesPerPage, selectedService.id);

  if (isLoading) return <LoadingSpinner/>;
  if (error || !data) return <PageNotFound/>;

  return (
    <Box p={2} display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'} gap={3}>
      {data && data.content.length !== 0 ? (
        <>
          <Typography variant={"h5"} textAlign={"center"}>
            Our Experts for {selectedService.name}
          </Typography>
          <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={4}
               maxWidth={'1200px'}>
            {data.content.map((employee) => (
            <StaffCard
              key={employee.id}
              employee={employee}
              handleDeleteEmployeeFromService={
                handleDeleteEmployeeFromService ?
                  () => handleDeleteEmployeeFromService(employee.email, selectedService.id) : undefined
              }
              handleBookWithStaff={
                handleBookWithStaff ?
                  () => handleBookWithStaff(employee.email, selectedService.id) : undefined
              }
            />
            ))}
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              count={data.totalPages}
              page={page + 1}
              onChange={(_, value) => handlePageChange(value)}
              color="primary"
            />
          </Box>
        </>
      ) : (
        <Typography variant={"h5"} textAlign={"center"}>
          There are no experts for {selectedService.name} at the moment.
        </Typography>
      )}
    </Box>
  );
};

export default StaffList;