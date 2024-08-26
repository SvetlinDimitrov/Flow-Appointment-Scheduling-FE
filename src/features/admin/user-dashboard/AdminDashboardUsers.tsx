import {User, UserRole} from '../../../shared/models/user.types.ts';
import PaginatedUserSection from "./user-list/PaginatedUserList.tsx";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import useDeleteUserMutation from "../../../hooks/users/mutations/useDeleteUserMutation.ts";
import ConfirmationModalWrapper from "../../../shared/core/confirm-model/ConfirmationModalWrapper.tsx";
import {useState} from "react";
import EditUserModal from "./edit-staff/EditUserModal.tsx";
import {UpdateUserAdminRequest} from "../../../shared/models/api/users.ts";
import useModifyStaffMutation from "../../../hooks/users/mutations/useModifyStaffMutation.ts";

const AdminDashboardUsers = () => {

  const [editUser, setEditUser] = useState<User | null>(null);

  const {openModal, closeModal} = useConfirmationModal();
  const deleteUserMutation = useDeleteUserMutation();
  const modifyStaffMutation = useModifyStaffMutation();

  const handleDelete = (user: User) => {
    const onConfirm = () => {
      if (user) {
        deleteUserMutation.mutate(user.id);
      }
      closeModal();
    };

    openModal("Delete User", `Are you sure you want to delete the user: ${user.email}?`, onConfirm);
  };

  const handleAssignToService = (user: User) => {
    console.log('Assign user to service:', user);
  };

  const handleSaveEditModal = (data: UpdateUserAdminRequest) => {
    if (editUser) {
      modifyStaffMutation.mutate({id: editUser.id, modifyDto: data});
    }
    setEditUser(null);
  };

  return (
    <div>
      <PaginatedUserSection
        title="Administrators"
        onEdit={(user) => setEditUser(user)}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
        userRole={UserRole.ADMINISTRATOR}
      />
      <PaginatedUserSection
        title="Employees"
        onEdit={(user) => setEditUser(user)}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
        userRole={UserRole.EMPLOYEE}
      />
      <PaginatedUserSection
        title="Clients"
        onEdit={(user) => setEditUser(user)}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
        userRole={UserRole.CLIENT}
      />
      <ConfirmationModalWrapper/>
      {editUser && editUser.staffDetails && (
        <EditUserModal
          open={!!editUser}
          onClose={() => setEditUser(null)}
          onSave={handleSaveEditModal}
          initialData={{
            userRole: editUser.role,
            salary: editUser.staffDetails.salary || 0,
            isAvailable: true,
            beginWorkingHour: editUser.staffDetails.beginWorkingHour.toString(),
            endWorkingHour: editUser.staffDetails.endWorkingHour.toString(),
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboardUsers;