import {useState} from 'react';
import {User, UserRole} from '../../../shared/models/user.types.ts';
import PaginatedUserSection from "./user-list/PaginatedUserList.tsx";
import ConfirmationModal from '../../../shared/core/confirm-model/ConfirmationModal.tsx';

const AdminDashboardUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleEdit = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleDelete = (user: User) => {
    setSelectedUser(user);
    setConfirmModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedUser) {
      console.log('Delete user:', selectedUser);
      setSelectedUser(null);
    }
    setConfirmModalOpen(false);
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
      <ConfirmationModal
        open={isConfirmModalOpen}
        title="Delete User"
        message={`Are you sure you want to delete the user: ${selectedUser?.firstName} ${selectedUser?.lastName}?`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmModalOpen(false)}
      />
    </div>
  );
};

export default AdminDashboardUsers;