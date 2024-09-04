import {Box, Card, CardContent, Pagination, Typography, useMediaQuery, useTheme} from '@mui/material';
import {User, UserRole} from "../../../../shared/models/user.types.ts";
import UserActions from "./UserActions.tsx";
import StaffDataDetails from "./StaffDataDetails.tsx";
import usePaginatedQuery from "../../../../hooks/custom/usePaginatedQuery.ts";
import LoadingSpinner from "../../../../shared/core/loading/LoadingSpinner.tsx";
import PageNotFound from "../../../../shared/core/not-found/PageNotFound.tsx";
import useGetUsers from "../../../../hooks/users/query/useGetUsers.ts";
import {useContext} from "react";
import {UserAuthContext} from "../../../../shared/context/UserAuthContext.tsx";

interface PaginatedUserSectionProps {
  title: string;
  userRole?: UserRole;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onAssignToService: (user: User) => void;
}

const PaginatedUserSection = (
  {
    title,
    userRole,
    onEdit,
    onDelete,
    onAssignToService,
  }: PaginatedUserSectionProps) => {

  const {userId} = useContext(UserAuthContext)!;

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  const usersPerPage = isXs ? 1 : isLg ? 2 : 5;

  const {
    data,
    isLoading,
    error,
    page,
    handlePageChange
  } = usePaginatedQuery<User>(useGetUsers, 0, usersPerPage, userRole);

  if (isLoading) return <LoadingSpinner/>;
  if (error || !data) return <PageNotFound/>;

  return (
    <Box p={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        {title} {data.totalElements}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2} maxWidth={'1600px'}>
        {data?.content.map((user) => (
          <Card key={user.id} sx={{ maxWidth: 300, boxShadow: 3 }}>
            <CardContent>
              <Typography variant={"h6"} fontWeight={'bold'} textAlign={'center'}>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant={"body2"} textAlign={"center"} color={"gray"} fontStyle={"italic"} marginTop={1}>
                {user.email}
              </Typography>
              <Typography variant={"body2"} textAlign={"center"} color={"gray"} fontStyle={"italic"} marginTop={1}>
                Role: {user.role}
              </Typography>
              {user.staffDetails &&
                <StaffDataDetails staffData={user.staffDetails}/>
              }
              {user.id !== userId &&
                <UserActions userRole={user.role}
                             onEdit={() => onEdit(user)}
                             onDelete={() => onDelete(user)}
                             onAssignToService={() => onAssignToService(user)}/>
              }
            </CardContent>
          </Card>
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
    </Box>
  );
};

export default PaginatedUserSection;