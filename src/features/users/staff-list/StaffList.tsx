import {Box, Pagination, Typography, useMediaQuery, useTheme} from "@mui/material";
import StaffCard from "./staff-card/StaffCard.tsx";
import {User} from "../../../shared/models/user.types.ts";
import usePaginatedQuery from "../../../hooks/custom/usePaginatedQuery.ts";
import PageNotFound from "../../../shared/core/not-found/PageNotFound.tsx";
import {Service} from "../../../shared/models/service.types.ts";
import useGetUsersByServiceId from "../../../hooks/users/query/useGetUsersByServiceId.ts";
import {useEffect, useState} from "react";
import ContainerLoader from "../../../shared/core/loading/container-loader/ContainerLoader.tsx";

interface StaffListProps {
  selectedService: Service;
  handleBookWithStaff: ((staffEmail: string, serviceId: number) => void) | null;
  handleDeleteEmployeeFromService: ((staffEmail: string, serviceId: number) => void) | null;
  showStaffNumbers: number
}

const StaffList = (
  {
    selectedService,
    handleDeleteEmployeeFromService,
    handleBookWithStaff,
    showStaffNumbers
  }: StaffListProps) => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const [prevIsXs, setPrevIsXs] = useState(isXs);

  const employeesPerPage = isXs ? 1 : showStaffNumbers;

  const {
    data,
    isLoading,
    error,
    page,
    handlePageChange,
    setPage,
  } = usePaginatedQuery<User>(useGetUsersByServiceId, 0, employeesPerPage, selectedService.id);

  useEffect(() => {
    if (prevIsXs !== isXs) {
      setPage(0);
      setPrevIsXs(isXs);
    }
  }, [isXs, prevIsXs, setPage]);

  if (error) return <PageNotFound/>;

  return (
    <Box p={2} display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'} gap={3}>
      {isLoading && <ContainerLoader height={430}/>}
      {!isLoading && data && data.content.length !== 0 &&
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
              boundaryCount={isXs ? 0 : 1}
              siblingCount={isXs ? 0 : 1}
            />
          </Box>
        </>
      }
      {data && data.content.length === 0 &&
        <Typography variant={"h5"} textAlign={"center"}>
          There are no experts for {selectedService.name} at the moment.
        </Typography>
      }
    </Box>
  );
};

export default StaffList;