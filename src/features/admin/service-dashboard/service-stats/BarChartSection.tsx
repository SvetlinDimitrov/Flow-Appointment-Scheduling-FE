import { Grid } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ShortAppointment, AppointmentStatus } from '../../../../shared/models/appointment.types.ts';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartSectionProps {
  events: ShortAppointment[];
}

/**
 * BarChartSection component visualizes appointments in a bar chart.
 * Each bar represents a week within the last 30 days and contains mini-bars for each appointment status.
 */
const BarChartSection = ({ events }: BarChartSectionProps) => {
  /**
   * Helper function to get the week number of a date.
   * @param date - The date to get the week number for.
   * @returns The week number of the given date.
   */
  const getWeekNumber = (date: Date) => {
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((date.getDay() + 1 + days) / 7);
  };

  /**
   * Calculate the start date (30 days back from now).
   */
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);

  /**
   * Define the type for groupedEvents.
   */
  type GroupedEvents = Record<number, Record<AppointmentStatus, number>>;

  /**
   * Initialize the grouped events object for the last 30 days.
   */
  const groupedEvents: GroupedEvents = {};
  for (let i = 0; i < 5; i++) {
    const week = getWeekNumber(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i * 7));
    groupedEvents[week] = {
      [AppointmentStatus.NOT_APPROVED]: 0,
      [AppointmentStatus.APPROVED]: 0,
      [AppointmentStatus.COMPLETED]: 0,
      [AppointmentStatus.CANCELED]: 0
    };
  }

  /**
   * Group events by week and status within the last 30 days.
   * @param events - The array of appointments to group.
   */
  events.forEach(event => {
    const eventDate = new Date(event.startDate);
    if (eventDate >= startDate) {
      const week = getWeekNumber(eventDate);
      if (!groupedEvents[week]) {
        groupedEvents[week] = {
          [AppointmentStatus.NOT_APPROVED]: 0,
          [AppointmentStatus.APPROVED]: 0,
          [AppointmentStatus.COMPLETED]: 0,
          [AppointmentStatus.CANCELED]: 0
        };
      }
      groupedEvents[week][event.status]++;
    }
  });

  const labels = Object.keys(groupedEvents).map(week => `Week ${week}`);
  const datasets = [
    {
      label: 'Not Approved',
      data: Object.values(groupedEvents).map(week => week[AppointmentStatus.NOT_APPROVED]),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
    },
    {
      label: 'Approved',
      data: Object.values(groupedEvents).map(week => week[AppointmentStatus.APPROVED]),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
    },
    {
      label: 'Completed',
      data: Object.values(groupedEvents).map(week => week[AppointmentStatus.COMPLETED]),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
    },
    {
      label: 'Canceled',
      data: Object.values(groupedEvents).map(week => week[AppointmentStatus.CANCELED]),
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgb(255, 206, 86)',
      borderWidth: 1,
    },
  ];

  const barData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: 'Appointments Bar Chart by Week',
      },
    },
  };

  return (
    <Grid item xs={12} height="60%">
      <Bar data={barData} options={options} />
    </Grid>
  );
};

export default BarChartSection;