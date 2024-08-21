import {Box} from "@mui/material";
import {useServiceContext} from "../../../shared/context/ServiceContext.tsx";
import ServiceList from "../../service/service-list/ServiceList.tsx";
import StaffList from "../../users/staff-list/StaffList.tsx";
import {useState} from "react";
import {ModifyService, ServiceWithUsers} from "../../../shared/models/service.types.ts";
import ServiceEditModal from "./edit/ServiceEditModal.tsx";

const AdminServiceDashboard = () => {
  const {services} = useServiceContext();
  const [selectedService, setSelectedService] = useState<ServiceWithUsers | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleViewEmployees = (service: ServiceWithUsers) => {
    setSelectedService(service);
  }

  const handleUpdateService = (service: ServiceWithUsers) => {
    setSelectedService(service);
    setEditModalOpen(true);
  }

  const handleDeleteService = (service: ServiceWithUsers) => {
  const isConfirmed = window.confirm(`Are you sure you want to delete the service: ${service.name}?`);
  if (isConfirmed) {
    console.log("Delete service: ", service);

  }
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
    </Box>
  );
};

export default AdminServiceDashboard;