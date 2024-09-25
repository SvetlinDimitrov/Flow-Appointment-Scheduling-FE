import {Box} from "@mui/material";
import AdminServiceList from "./AdminServiceList.tsx";
import {useState} from "react";
import {Service} from "../../../shared/models/service.types.ts";
import ServiceEditModal from "./ServiceEditModal.tsx";
import useDeleteServiceMutation from "../../../hooks/services/mutations/useDeleteServiceMutation.ts";
import {useConfirmationModal} from "../../../shared/context/ConfirmationModalContext.tsx";
import WelcomeServiceSection from "./WelcomeServiceSection.tsx";
import CreateServiceModal from "./CreateServiceModal.tsx";
import ConfirmationModalWrapper from "../../../shared/core/confirm-model/ConfirmationModalWrapper.tsx";
import AdminServiceStaffModal from "./AdminServiceStaffModal.tsx";

const AdminServiceDashboard = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [showStaff, setShowStaff] = useState(false);

  const {openModal, closeModal} = useConfirmationModal();

  const deleteServiceMutation = useDeleteServiceMutation();

  const handleDeleteService = (service: Service) => {
    const onConfirm = () => {
      if (service)
        deleteServiceMutation.mutate(service.id, {
          onSuccess: () => {
            setSelectedServiceId(null)
            closeModal();
          }
        });
    };

    openModal("Delete Service", `Are you sure you want to delete the service: ${service.name}?`, onConfirm);
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      width={'80%'}
      margin={'auto'}
      minWidth={300}
      mt={10}
    >
      <WelcomeServiceSection onCreateService={() => setCreateModalOpen(true)}/>
      <AdminServiceList
        handleViewStaff={(service) => {
          setSelectedServiceId(service.id);
          setShowStaff(true);
        }}
        handleUpdateService={(service) => {
          setSelectedServiceId(service.id);
          setEditModalOpen(true);
        }}
        handleDeleteService={handleDeleteService}
      />

      {selectedServiceId &&
        <AdminServiceStaffModal
          open={showStaff}
          onClose={() => {
            setShowStaff(false);
            setSelectedServiceId(null);
          }}
          serviceId={selectedServiceId}
        />
      }

      {selectedServiceId && (
        <ServiceEditModal
          open={isEditModalOpen}
          onClose={
            () => {
              setEditModalOpen(false);
              setSelectedServiceId(null);
            }
          }
          id={selectedServiceId}
        />
      )}
      {isCreateModalOpen &&
        <CreateServiceModal
          open={isCreateModalOpen}
          onClose={() => setCreateModalOpen(false)}
        />
      }
      <ConfirmationModalWrapper/>
    </Box>
  );
};

export default AdminServiceDashboard;