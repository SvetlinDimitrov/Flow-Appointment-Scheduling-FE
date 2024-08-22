import {Box, Button, Card, CardContent, Typography, useMediaQuery} from '@mui/material';
import {User} from "../../../../shared/models/user.types.ts";
import UserActions from "./UserActions.tsx";
import StaffDataDetails from "./StaffDataDetails.tsx";
import usePagination from "../../../../hooks/custom/usePagination.ts";

interface PaginatedUserSectionProps {
  title: string;
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onAssignToService: (user: User) => void;
}

const PaginatedUserSection = ({ title, users, onEdit, onDelete, onAssignToService }: PaginatedUserSectionProps) => {
  const isXs = useMediaQuery('(max-width:600px)');
  const isLg = useMediaQuery('(max-width:1200px)');

  const usersPerPage = isXs ? 1 : isLg ? 3 : 5;

  const {
    currentPage,
    totalPages,
    currentItems,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(users, usersPerPage);

  return (
    <Box p={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography variant={"h5"} textAlign={"center"}>
        {title}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2} maxWidth={'1600px'}>
        {currentItems.map((user) => (
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
              {user.employeeData && <StaffDataDetails employeeData={user.employeeData} />}
              <UserActions userRole={user.role}
                           onEdit={() => onEdit(user)}
                           onDelete={() => onDelete(user)}
                           onAssignToService={() => onAssignToService(user)}/>
            </CardContent>
          </Card>
        ))}
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

export default PaginatedUserSection;