import {Box} from '@mui/material';
import {Assignment, Delete, Edit, Event} from '@mui/icons-material';
import {UserRole} from "../../../../../shared/models/user.types.ts";

interface UserActionsProps {
  userRole: UserRole;
  onEdit: () => void;
  onDelete: () => void;
  onAssignToService: () => void;
  onViewAppointments: () => void;
}

const UserActions = (
  {
    userRole,
    onEdit,
    onDelete,
    onAssignToService,
    onViewAppointments
  }: UserActionsProps) => (
  <Box
    display={"flex"}
    justifyContent={"space-between"}
    mt={2}
    gap={1}
    aria-modal={true}
  >
    {userRole === UserRole.CLIENT ? (
      <>
        <Delete
          color="secondary"
          sx={{cursor: 'pointer'}}
          onClick={onDelete}
        />
        <Event
          color="action"
          sx={{cursor: 'pointer'}}
          onClick={onViewAppointments}
        />
      </>

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
        <Event
          color="action"
          sx={{cursor: 'pointer'}}
          onClick={onViewAppointments}
        />
      </>
    )}
  </Box>
);

export default UserActions;