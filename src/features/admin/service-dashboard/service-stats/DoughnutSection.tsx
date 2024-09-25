import {Grid, Typography} from '@mui/material';
import {Doughnut} from 'react-chartjs-2';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {AppointmentStatus, ShortAppointment} from '../../../../shared/models/appointment.types.ts';
import {Service} from '../../../../shared/models/service.types.ts';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutSectionProps {
  events: ShortAppointment[];
  service: Service;
}

const DoughnutSection = ({events, service}: DoughnutSectionProps) => {
  const statusCounts = events.reduce((acc, event) => {
    acc[event.status] = (acc[event.status] || 0) + 1;
    return acc;
  }, {} as Record<AppointmentStatus, number>);

  const totalProfit = (statusCounts[AppointmentStatus.COMPLETED] || 0) * service.price;
  const totalLosses = (statusCounts[AppointmentStatus.CANCELED] || 0) * service.price;
  const totalUndecided = ((statusCounts[AppointmentStatus.NOT_APPROVED] || 0) + (statusCounts[AppointmentStatus.APPROVED] || 0)) * service.price;

  const pieData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Grid item xs={12} display="flex" height="40%">
      <Grid item xs={6} display="flex" flexDirection="column" justifyContent="center">
        <Doughnut data={pieData}/>
      </Grid>
      <Grid item xs={6} display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h6" component="h2" gutterBottom>
          Total Profit: ${totalProfit}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Total Losses: ${totalLosses}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Total Pending: ${totalUndecided}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DoughnutSection;