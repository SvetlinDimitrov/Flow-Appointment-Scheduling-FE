import {Box} from '@mui/material';
import {Assignment, Delete, Edit} from '@mui/icons-material';
import {UserRole} from "../../../../../shared/models/user.types.ts";

interface UserActionsProps {
  userRole: UserRole;
  onEdit: () => void;
  onDelete: () => void;
  onAssignToService: () => void;
}

const UserActions = ({ userRole, onEdit, onDelete, onAssignToService }: UserActionsProps) => (
  <Box display={"flex"} justifyContent={"space-between"} mt={2} gap={1} aria-modal={true}>
    {userRole === UserRole.CLIENT ? (
      <Delete
        color="secondary"
        sx={{cursor: 'pointer'}}
        onClick={onDelete}
      />
    ) : (
      <>
        <Edit
          color="primary"
          sx={{cursor: 'pointer'}}
          onClick={onEdit}
        />
        <Delete
          color="secondary"
          sx={{cursor: 'pointer'}}
          onClick={onDelete}
        />
        <Assignment
          color="inherit"
          sx={{cursor: 'pointer'}}
          onClick={onAssignToService}
        />
      </>
    )}
  </Box>
);

export default UserActions;