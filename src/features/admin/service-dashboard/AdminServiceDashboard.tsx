import {Box} from "@mui/material";
import ServiceList from "../../service/service-list/ServiceList.tsx";
import StaffList from "../../users/staff-list/StaffList.tsx";
import {useState} from "react";
import {ModifyService, Service} from "../../../shared/models/service.types.ts";
import ServiceEditModal from "./edit/ServiceEditModal.tsx";
import ConfirmationModal from "../../../shared/core/confirm-model/ConfirmationModal.tsx";

const AdminServiceDashboard = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleViewEmployees = (service: Service) => {
    setSelectedService(service);
  }

  const handleUpdateService = (service: Service) => {
    setSelectedService(service);
    setEditModalOpen(true);
  }

  const handleDeleteService = (service: Service) => {
    setSelectedService(service);
    setConfirmModalOpen(true);
  }

  const handleConfirmDelete = () => {
    if (selectedService) {
      console.log("Delete service: ", selectedService);
      setSelectedService(null);
    }
    setConfirmModalOpen(false);
  }

  const handleEditSubmit = (data: ModifyService) => {
    console.log("Updated service data: ", data);
    setEditModalOpen(false);
  }

  const handleDeleteEmployeeFromService = (staffEmail: string, serviceId: number) => {
    console.log("Delete employee " + staffEmail + " from service " + serviceId);
  }

  return (
    <Box>
      <ServiceList
        handleViewStaff={handleViewEmployees}
        handleUpdateService={handleUpdateService}
        handleDeleteService={handleDeleteService}/>
      {selectedService &&
        <StaffList
          selectedService={selectedService}
          handleDeleteEmployeeFromService={handleDeleteEmployeeFromService}
          handleBookWithStaff={null}
        />
      }


      {selectedService && (
        <ServiceEditModal
          open={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          service={{
            name: selectedService.name,
            description: selectedService.description,
            duration: selectedService.duration,
            price: selectedService.price,
            placeName: selectedService.workSpace.name,
          }}
          onSubmit={handleEditSubmit}
        />
      )}
      <ConfirmationModal
        open={isConfirmModalOpen}
        title="Delete Service"
        message={`Are you sure you want to delete the service: ${selectedService?.name}?`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmModalOpen(false)}/>
    </Box>
  );
};

export default AdminServiceDashboard;