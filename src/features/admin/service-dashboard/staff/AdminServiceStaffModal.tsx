import {Box, Modal, useMediaQuery, useTheme} from "@mui/material";
import StaffList from "../../../users/staff-list/StaffList.tsx";
import {Service} from "../../../../shared/models/service.types.ts";
import useUnassignStaffFromServiceMutation
  from "../../../../hooks/services/mutations/useUnassignStaffFromServiceMutation.ts";
import {useConfirmationModal} from "../../../../shared/context/ConfirmationModalContext.tsx";

interface AdminServiceStaffModalProps {
  open: boolean;
  onClose: () => void;
  selectedService: Service;
}

const AdminServiceStaffModal = (
  {
    open,
    onClose,
    selectedService,
  }: AdminServiceStaffModalProps) => {

  const unassignStaffFromServiceMutation = useUnassignStaffFromServiceMutation();
  const {openModal, closeModal} = useConfirmationModal();

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

  const theme = useTheme();
  const isBelow600 = useMediaQuery(theme.breakpoints.down(660));
  const isBelow1200 = useMediaQuery(theme.breakpoints.down(1200));
  const isBelow1600 = useMediaQuery(theme.breakpoints.down(1600));

  let showStaffNumbers = 4;
  if (isBelow600) {
    showStaffNumbers = 1;
  } else if (isBelow1200) {
    showStaffNumbers = 2;
  } else if (isBelow1600) {
    showStaffNumbers = 3;
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        padding: '10px',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
        overflowX: 'auto',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: '80%',
          maxHeight: '80%',
          overflowX: 'auto',
        }}
      >
        <StaffList
          selectedService={selectedService}
          handleDeleteEmployeeFromService={handleUnassignStaffFromService}
          handleBookWithStaff={null}
          showStaffNumbers={showStaffNumbers}
        />
      </Box>
    </Modal>
  );
};

export default AdminServiceStaffModal;