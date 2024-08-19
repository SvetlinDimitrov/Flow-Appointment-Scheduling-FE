import { Box, Typography } from '@mui/material';
import { User, UserRole } from "../../../../models/user.types.ts";

interface UserActionsProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onAssignToService: (user: User) => void;
}

const UserActions = ({ user, onEdit, onDelete, onAssignToService }: UserActionsProps) => (
  <Box display={"flex"} justifyContent={"space-between"} mt={2} gap={1}>
    {user.role === UserRole.CLIENT ? (
      <Typography
        variant="body1"
        color="secondary"
        sx={{ cursor: 'pointer'}}
        onClick={() => onDelete(user)}
      >
        Delete
      </Typography>
    ) : (
      <>
        <Typography
          variant="body1"
          color="primary"
          sx={{ cursor: 'pointer'}}
          onClick={() => onEdit(user)}
        >
          Edit
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ cursor: 'pointer'}}
          onClick={() => onDelete(user)}
        >
          Delete
        </Typography>
        <Typography
          variant="body1"
          color="inherit"
          sx={{ cursor: 'pointer'}}
          onClick={() => onAssignToService(user)}
        >
          Assign to Service
        </Typography>
      </>
    )}
  </Box>
);

export default UserActions;