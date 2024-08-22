import {Box, Typography} from '@mui/material';
import {UserRole} from "../../../../shared/models/user.types.ts";

interface UserActionsProps {
  userRole: UserRole;
  onEdit: () => void;
  onDelete: () => void;
  onAssignToService: () => void;
}

const UserActions = ({ userRole, onEdit, onDelete, onAssignToService }: UserActionsProps) => (
  <Box display={"flex"} justifyContent={"space-between"} mt={2} gap={1}>
    {userRole === UserRole.CLIENT ? (
      <Typography
        variant="body1"
        color="secondary"
        sx={{ cursor: 'pointer'}}
        onClick={onDelete}
      >
        Delete
      </Typography>
    ) : (
      <>
        <Typography
          variant="body1"
          color="primary"
          sx={{ cursor: 'pointer'}}
          onClick={onEdit}
        >
          Edit
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ cursor: 'pointer'}}
          onClick={onDelete}
        >
          Delete
        </Typography>
        <Typography
          variant="body1"
          color="inherit"
          sx={{ cursor: 'pointer'}}
          onClick={onAssignToService}
        >
          Assign to Service
        </Typography>
      </>
    )}
  </Box>
);

export default UserActions;