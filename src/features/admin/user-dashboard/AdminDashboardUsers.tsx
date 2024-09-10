import {useState} from 'react';
import {User, UserRole} from '../../../shared/models/user.types.ts';
import PaginatedUserSection from "./user-list/PaginatedUserList.tsx";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import useDeleteUserMutation from "../../../hooks/users/mutations/useDeleteUserMutation.ts";
import ConfirmationModalWrapper from "../../../shared/core/confirm-model/ConfirmationModalWrapper.tsx";
import EditUserModal from "./edit-staff/EditUserModal.tsx";
import {CreateUpdateUserAdminRequest, HireStaffRequest} from "../../../shared/models/api/users.ts";
import useModifyStaffMutation from "../../../hooks/users/mutations/useModifyStaffMutation.ts";
import {Service} from "../../../shared/models/service.types.ts";
import AssignServiceModal from "./assign-staff/AssignServiceModal.tsx";
import useAssignStaffToServiceMutation from "../../../hooks/services/mutations/useAssignStaffToServiceMutation.ts";
import WelcomeUserSection from "./welcome-user-section/WelcomeUserSection.tsx";
import HireStaffModal from "./welcome-user-section/hire-staff/HireStaffModal.tsx";
import useHireStaffMutation from "../../../hooks/users/mutations/useHireStuffMutation.ts";
import {Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

const AdminDashboardUsers = () => {
  const [editUser, setEditUser] = useState<User | null>(null);
  const [assignUser, setAssignUser] = useState<User | null>(null);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole | ''>('');

  const {openModal, closeModal} = useConfirmationModal();
  const deleteUserMutation = useDeleteUserMutation();
  const modifyStaffMutation = useModifyStaffMutation();
  const assignStaffToServiceMutation = useAssignStaffToServiceMutation();
  const hireStaffMutation = useHireStaffMutation();

  const handleDelete = (user: User) => {
    const onConfirm = () => {
      if (user)
        deleteUserMutation.mutate(user.id, {
          onSuccess: () => closeModal()
        });
    };

    openModal("Delete User", `Are you sure you want to delete the user: ${user.email}?`, onConfirm);
  };

  const handleSaveEditModal = (data: CreateUpdateUserAdminRequest) => {
    if (editUser)
      modifyStaffMutation.mutate({id: editUser.id, modifyDto: data}, {
        onSuccess: () => setEditUser(null)
      });
  };

  const handleAssignService = (service: Service) => {
    if (assignUser && service)
      assignStaffToServiceMutation.mutate({id: service.id, staffEmail: assignUser.email}, {
        onSuccess: () => setAssignUser(null)
      });
  };

  const handleHireStaffSubmit = (data: HireStaffRequest) => {
    hireStaffMutation.mutate(data, {
      onSuccess: () => setIsHireModalOpen(false)
    });
  };

  const handleRoleChange = (event: SelectChangeEvent<UserRole | ''>) => {
    setSelectedRole(event.target.value as UserRole);
  };

  return (
    <div>
      <WelcomeUserSection onHireStaff={() => setIsHireModalOpen(true)}/>
      <Box display={'flex'} justifyContent={'center'} mt={2} mb={2} pl={4} pr={4}>
        <FormControl sx={{width: 300}} size={'small'}>
          <InputLabel id="user-role-select-label">User Role</InputLabel>
          <Select
            labelId="user-role-select-label"
            value={selectedRole}
            onChange={handleRoleChange}
            label="User Role"
            variant="outlined"
          >
            <MenuItem value={UserRole.ADMINISTRATOR}>Administrators</MenuItem>
            <MenuItem value={UserRole.EMPLOYEE}>Staff Members</MenuItem>
            <MenuItem value={UserRole.CLIENT}>Clients</MenuItem>
          </Select>
          <FormHelperText>Select the user role to filter the list.</FormHelperText>
        </FormControl>
      </Box>
      {selectedRole === UserRole.ADMINISTRATOR && (
        <PaginatedUserSection
          title="Total: "
          onEdit={(user) => setEditUser(user)}
          onDelete={handleDelete}
          onAssignToService={(user) => setAssignUser(user)}
          userRole={UserRole.ADMINISTRATOR}
        />
      )}
      {selectedRole === UserRole.EMPLOYEE && (
        <PaginatedUserSection
          title="Total: "
          onEdit={(user) => setEditUser(user)}
          onDelete={handleDelete}
          onAssignToService={(user) => setAssignUser(user)}
          userRole={UserRole.EMPLOYEE}
        />
      )}
      {selectedRole === UserRole.CLIENT && (
        <PaginatedUserSection
          title="Total: "
          onEdit={(user) => setEditUser(user)}
          onDelete={handleDelete}
          onAssignToService={(user) => setAssignUser(user)}
          userRole={UserRole.CLIENT}
        />
      )}
      <ConfirmationModalWrapper/>
      {editUser && editUser.staffDetails && (
        <EditUserModal
          open={!!editUser}
          onClose={() => setEditUser(null)}
          onSave={handleSaveEditModal}
          initialData={{
            userRole: editUser.role,
            salary: editUser.staffDetails.salary || 0,
            isAvailable: editUser.staffDetails.isAvailable,
            beginWorkingHour: editUser.staffDetails.beginWorkingHour.toString(),
            endWorkingHour: editUser.staffDetails.endWorkingHour.toString(),
          }}
        />
      )}
      {assignUser && (
        <AssignServiceModal
          user={assignUser}
          open={!!assignUser}
          onClose={() => setAssignUser(null)}
          onAssign={handleAssignService}
        />
      )}
      <HireStaffModal
        open={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        onSubmit={handleHireStaffSubmit}
      />
    </div>
  );
};

export default AdminDashboardUsers;