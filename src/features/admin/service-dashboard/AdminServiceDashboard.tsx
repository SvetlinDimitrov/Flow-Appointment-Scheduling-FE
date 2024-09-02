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
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import WelcomeServiceSection from "./welcome-service-section/WelcomeServiceSection.tsx";
import CreateServiceModal from "./create/CreateServiceModal.tsx";
import useCreateServiceMutation from "../../../hooks/services/mutations/useCreateServiceMutation.ts";
import ConfirmationModalWrapper from "../../../shared/core/confirm-model/ConfirmationModalWrapper.tsx";

const AdminServiceDashboard = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [showStaff, setShowStaff] = useState(false);

  const {openModal, closeModal} = useConfirmationModal();

  const updateServiceMutation = useUpdateServiceMutation();
  const deleteServiceMutation = useDeleteServiceMutation();
  const unassignStaffFromServiceMutation = useUnassignStaffFromServiceMutation();
  const createServiceMutation = useCreateServiceMutation();

  const handleDeleteService = (service: Service) => {
    const onConfirm = () => {
      if (service)
        deleteServiceMutation.mutate(service.id, {
          onSuccess: () => {
            setSelectedService(null)
            closeModal();
          }
        });
    };

    openModal("Delete Service", `Are you sure you want to delete the service: ${service.name}?`, onConfirm);
  };

  const handleUnassignStaffFromService = (staffEmail: string, serviceId: number) => {
    const onConfirm = () => {
      unassignStaffFromServiceMutation.mutate({
        id: serviceId,
        staffEmail: staffEmail,
      }, {
        onSuccess: () => closeModal()
      });
    };

    openModal("Unassign Staff", `Are you sure you want to unassign the staff member: ${staffEmail}?`, onConfirm);
  };

  const handleEditService = (data: ServiceDTO) => {
    updateServiceMutation.mutate({
      serviceId: selectedService!.id,
      service: data,
    }, {
      onSuccess: () => {
        setSelectedService(null);
        setEditModalOpen(false);
      }
    });
  };

  const handleCreateService = (data: ServiceDTO) => {
    createServiceMutation.mutate({service: data}, {
      onSuccess: () => setCreateModalOpen(false)
    });
  };

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={2}>
      <WelcomeServiceSection onCreateService={() => setCreateModalOpen(true)}/>
      <ServiceList
        handleViewStaff={(service) => {
          setSelectedService(service);
          setShowStaff(true);
        }}
        handleUpdateService={(service) => {
          setSelectedService(service);
          setShowStaff(false);
          setEditModalOpen(true);
        }}
        handleDeleteService={handleDeleteService}
      />
      {selectedService && showStaff && (
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
          onSubmit={handleEditService}
        />
      )}
      <CreateServiceModal
        open={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateService}
      />
      <ConfirmationModalWrapper/>
    </Box>
  );
};

export default AdminServiceDashboard;