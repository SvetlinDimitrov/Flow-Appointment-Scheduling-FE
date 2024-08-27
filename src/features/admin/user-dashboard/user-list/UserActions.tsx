import {Box, Typography} from '@mui/material';
import {UserRole} from "../../../../shared/models/user.types.ts";

interface UserActionsProps {
  userRole: UserRole;
  onEdit: () => void;
  onDelete: () => void;
  onAssignToService: () => void;
}

const UserActions = ({ userRole, onEdit, onDelete, onAssignToService }: UserActionsProps) => (
  <Box display={"flex"} justifyContent={"space-between"} mt={2} gap={1} aria-modal={true}>
    {userRole === UserRole.CLIENT ? (
      <Typography
        variant={"body2"}
        fontSize={"1rem"}
        color="secondary"
        sx={{ cursor: 'pointer'}}
        onClick={onDelete}
      >
        Delete
      </Typography>
    ) : (
      <>
        <Typography
          color="primary"
          variant={"body2"}
          fontSize={"1rem"}
          sx={{ cursor: 'pointer'}}
          onClick={onEdit}
        >
          Edit
        </Typography>
        <Typography
          color="secondary"
          variant={"body2"}
          fontSize={"1rem"}
          sx={{ cursor: 'pointer'}}
          onClick={onDelete}
        >
          Delete
        </Typography>
        <Typography
          color="inherit"
          variant={"body2"}
          fontSize={"1rem"}
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