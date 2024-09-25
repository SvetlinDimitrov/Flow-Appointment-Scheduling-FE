import { Grid, Modal } from '@mui/material';
import DoughnutSection from './DoughnutSection';
import BarChartSection from './BarChartSection';
import useGetServiceByIdQuery from '../../../../hooks/services/query/useGetServiceByIdQuery.ts';
import LoadingSpinner from '../../../../shared/core/loading/main-loader/LoadingSpinner.tsx';
import ErrorPage from '../../../../shared/core/error-page/ErrorPage.tsx';
import useGetAllAppointmentsShort from '../../../../hooks/appointments/query/useGetAllAppointmentsShortByUserId.ts';
import { FetchType } from '../../../../shared/models/react-big-calendar.ts';

interface BarChartModalProps {
  open: boolean;
  onClose: () => void;
  serviceId: number;
}

const ServiceStatsModal = ({ open, onClose, serviceId }: BarChartModalProps) => {
  const thirtyDaysBack = new Date();
  thirtyDaysBack.setDate(thirtyDaysBack.getDate() - 30);

  const {
    data: serviceData,
    isLoading: serviceLoading,
    error: serviceError
  } = useGetServiceByIdQuery(serviceId.toString());
  const {
    data: events = [],
    isLoading: allAppointmentsLoading,
    error: allAppointmentsError,
  } = useGetAllAppointmentsShort(serviceId, thirtyDaysBack, new Date(), FetchType.SERVICE);

  if (serviceLoading || allAppointmentsLoading) return <LoadingSpinner />;
  if (serviceError || allAppointmentsError) return <ErrorPage />;

  if (!serviceData) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(3px)',
      }}
    >
      <Grid
        container
        spacing={2}
        bgcolor="background.paper"
        p={1}
        borderRadius={2}
        boxShadow={24}
        minWidth={400}
        height={800}
        width={'80%'}
      >
        <DoughnutSection events={events} service={serviceData}/>
        <BarChartSection events={events} />
      </Grid>
    </Modal>
  );
};

export default ServiceStatsModal;