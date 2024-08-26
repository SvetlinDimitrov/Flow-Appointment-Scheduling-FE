import {FC} from 'react';
import {Box, Button, Modal, Pagination, Typography} from '@mui/material';
import {Service} from '../../../../shared/models/service.types.ts';
import usePaginatedQuery from '../../../../hooks/custom/usePaginatedQuery.ts';
import useGetAllServicesQuery from '../../../../hooks/services/query/useGetAllServicesQuery.ts';
import {User} from "../../../../shared/models/user.types.ts";
import LoadingSpinner from "../../../../shared/core/loading/LoadingSpinner.tsx";
import PageNotFound from "../../../../shared/core/not-found/PageNotFound.tsx";

interface AssignServiceModalProps {
  user: User;
  open: boolean;
  onClose: () => void;
  onAssign: (service: Service) => void;
}

const AssignServiceModal: FC<AssignServiceModalProps> = ({user, open, onClose, onAssign}) => {
  const servicesPerPage = 2;
  const {
    data,
    isLoading,
    error,
    page,
    handlePageChange
  } = usePaginatedQuery<Service>(useGetAllServicesQuery, 0, servicesPerPage);

  if (isLoading) return <LoadingSpinner/>;
  if (error || !data) return <PageNotFound/>;

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{padding: '12px', minWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <Box p={2} bgcolor="background.paper" borderRadius={2} width={400} mx="auto">
        <Typography variant="h6" mb={2}>Assign Service</Typography>
        {data.content.map((service) => (
          <Box key={service.id} mb={2} p={2} border="1px solid"
               borderColor="divider" borderRadius={2} display={'flex'}
               justifyContent={'center'} flexDirection={'column'} gap={1}
               alignItems={'center'}>
            <Typography textAlign={'center'} fontFamily="Arial, sans-serif">
              {service.name}
            </Typography>
            <Typography textAlign={'center'} fontFamily="Arial, sans-serif">
              {service.workSpace.name}
            </Typography>
            {user.staffDetails?.serviceIds.includes(service.id) ? (
              <Typography textAlign="center" fontFamily="Arial, sans-serif"
                          fontSize="0.875rem" color="textSecondary">
                Already assigned
              </Typography>
            ) : (
              <Button sx={{width: '50%',}} variant="contained" color="primary"
                      onClick={() => onAssign(service)}>
                Assign
              </Button>
            )}
          </Box>
        ))}
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={data.totalPages}
            page={page + 1}
            onChange={(_, value) => handlePageChange(value)}
            color="primary"
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default AssignServiceModal;