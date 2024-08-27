import {User, UserRole} from '../../../shared/models/user.types.ts';
import PaginatedUserSection from "./user-list/PaginatedUserList.tsx";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import useDeleteUserMutation from "../../../hooks/users/mutations/useDeleteUserMutation.ts";
import ConfirmationModalWrapper from "../../../shared/core/confirm-model/ConfirmationModalWrapper.tsx";

const AdminDashboardUsers = () => {

  const {openModal, closeModal} = useConfirmationModal();
  const deleteUserMutation = useDeleteUserMutation();

  const handleEdit = (user: User) => {
    console.log('Edit user:', user);
  };

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

  return (
    <div>
      <PaginatedUserSection
        title="Administrators"
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
        userRole={UserRole.ADMINISTRATOR}
      />
      <PaginatedUserSection
        title="Employees"
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
        userRole={UserRole.EMPLOYEE}
      />
      <PaginatedUserSection
        title="Clients"
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
        userRole={UserRole.CLIENT}
      />
      <ConfirmationModalWrapper/>
    </div>
  );
};

export default AdminDashboardUsers;