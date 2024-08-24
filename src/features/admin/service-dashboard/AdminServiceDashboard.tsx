import {Box} from "@mui/material";
import ServiceList from "../../service/service-list/ServiceList.tsx";
import StaffList from "../../users/staff-list/StaffList.tsx";
import {useState} from "react";
import {ModifyService, Service, ServiceWithUsers} from "../../../shared/models/service.types.ts";
import ServiceEditModal from "./edit/ServiceEditModal.tsx";
import ConfirmationModal from "../../../shared/core/confirm-model/ConfirmationModal.tsx";

const AdminServiceDashboard = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<ServiceWithUsers | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleViewEmployees = (service: ServiceWithUsers) => {
    setSelectedService(service);
  }

  const handleUpdateService = (service: ServiceWithUsers) => {
    setSelectedService(service);
    setEditModalOpen(true);
  }

  const handleDeleteService = (service: ServiceWithUsers) => {
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
      <ServiceList services={services}
                   handleViewStaff={handleViewEmployees}
                   handleUpdateService={handleUpdateService}
                   handleDeleteService={handleDeleteService}/>
      <StaffList selectedService={selectedService}
                 handleDeleteEmployeeFromService={handleDeleteEmployeeFromService}
                 handleBookWithStaff={null}
      />

      {selectedService && (
        <ServiceEditModal
          open={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          service={{
            name: selectedService.name,
            description: selectedService.description,
            duration: selectedService.duration,
            price: selectedService.price,
            placeName: selectedService.place.name,
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