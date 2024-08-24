import {Box} from "@mui/material";
import ServiceList from "../../service/service-list/ServiceList.tsx";
import StaffList from "../../users/staff-list/StaffList.tsx";
import {useState} from "react";
import {Service} from "../../../shared/models/service.types.ts";
import ServiceEditModal from "./edit/ServiceEditModal.tsx";
import useUpdateServiceMutation from "../../../hooks/services/mutations/useUpdateServiceMutation.ts";
import {ServiceDTO} from "../../../shared/models/api/services.ts";
import useDeleteServiceMutation from "../../../hooks/services/mutations/useDeleteServiceMutation.ts";
import useUnassignStaffFromServiceMutation
  from "../../../hooks/services/mutations/useUnassignStaffFromServiceMutation.ts";
import ConfirmationModal from "../../../shared/core/confirm-model/ConfirmationModal.tsx";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";

const AdminServiceDashboard = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [showStaff, setShowStaff] = useState(false);

  const {openModal, closeModal, modalData} = useConfirmationModal();

  const updateServiceMutation = useUpdateServiceMutation();
  const deleteServiceMutation = useDeleteServiceMutation();
  const unassignStaffFromServiceMutation = useUnassignStaffFromServiceMutation();

  const handleViewEmployees = (service: Service) => {
    setSelectedService(service);
    setShowStaff(true);
  };

  const handleSelectSpecificService = (service: Service) => {
    setSelectedService(service);
    setShowStaff(false);
    setEditModalOpen(true);
  };

  const handleDeleteService = (service: Service) => {

    const onConfirm = () => {
      if (service) {
        deleteServiceMutation.mutate(service.id);
        setSelectedService(null);
      }
      closeModal();
    };

    openModal("Delete Service", `Are you sure you want to delete the service: ${service.name}?`, onConfirm);
  };

  const handleUnassignStaffFromService = (staffEmail: string, serviceId: number) => {
    const onConfirm = () => {
      unassignStaffFromServiceMutation.mutate({
        id: serviceId,
        staffEmail: staffEmail,
      });
      closeModal();
    };

    openModal("Unassign Staff", `Are you sure you want to unassign the staff member: ${staffEmail}?`, onConfirm);
  };

  const handleEditSubmit = (data: ServiceDTO) => {
    updateServiceMutation.mutate({
      serviceId: selectedService!.id,
      service: data,
    });
    setSelectedService(null);
    setEditModalOpen(false);
  };

  return (
    <Box>
      <ServiceList
        handleViewStaff={handleViewEmployees}
        handleUpdateService={handleSelectSpecificService}
        handleDeleteService={handleDeleteService}
      />
      {selectedService && showStaff &&(
        <StaffList
          selectedService={selectedService}
          handleDeleteEmployeeFromService={handleUnassignStaffFromService}
          handleBookWithStaff={null}
        />
      )}

      {selectedService && (
        <ServiceEditModal
          open={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          service={{
            name: selectedService.name,
            description: selectedService.description,
            duration: selectedService.duration,
            price: selectedService.price,
            availability: selectedService.availability,
            workSpaceName: selectedService.workSpace.name,
          }}
          onSubmit={handleEditSubmit}
        />
      )}
      <ConfirmationModal
        open={modalData.isOpen}
        title={modalData.title}
        message={modalData.message}
        onConfirm={modalData.onConfirm}
        onCancel={closeModal}
      />
    </Box>
  );
};

export default AdminServiceDashboard;