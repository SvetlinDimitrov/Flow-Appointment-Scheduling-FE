import {Box, Typography} from '@mui/material';
import AppointmentEmpty from "./empty_appointment/AppointmentEmpty.tsx";
import PaginationAppointments from "./list_appointments/PaginationAppointments.tsx";
import {Appointment} from "../../../models/appointment.types.ts";
import {useNavigate} from "react-router-dom";

const appointmentsDummyData: Appointment[] = [
  {
    id: 1,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: "client",
      id: 1,
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: "employee",
      id: 2,
    },
    date: new Date(),
    service: {
      id: 1,
      name: "Consultation",
      price: 100,
      description: "A detailed consultation service.",
      duration: 60,
      place: {
        name: "Office 101",
        capacity: 5,
      },
    },
  },
  {
    id: 2,
    client: {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      role: "client",
      id: 3,
    },
    employee: {
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      role: "employee",
      id: 4,
    },
    date: new Date(),
    service: {
      id: 2,
      name: "Therapy",
      price: 150,
      description: "A comprehensive therapy session.",
      duration: 90,
      place: {
        name: "Room 202",
        capacity: 3,
      },
    },
  },
  {
    id: 3,
    client: {
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@example.com",
      role: "client",
      id: 5,
    },
    employee: {
      firstName: "Diana",
      lastName: "Evans",
      email: "diana.evans@example.com",
      role: "employee",
      id: 6,
    },
    date: new Date(),
    service: {
      id: 3,
      name: "Massage",
      price: 80,
      description: "A relaxing massage session.",
      duration: 60,
      place: {
        name: "Spa Room",
        capacity: 2,
      },
    },
  },
  {
    id: 4,
    client: {
      firstName: "Eve",
      lastName: "Foster",
      email: "eve.foster@example.com",
      role: "client",
      id: 7,
    },
    employee: {
      firstName: "Frank",
      lastName: "Green",
      email: "frank.green@example.com",
      role: "employee",
      id: 8,
    },
    date: new Date(),
    service: {
      id: 4,
      name: "Chiropractic",
      price: 120,
      description: "A chiropractic adjustment session.",
      duration: 45,
      place: {
        name: "Clinic Room 1",
        capacity: 4,
      },
    },
  },
  {
    id: 5,
    client: {
      firstName: "Grace",
      lastName: "Harris",
      email: "grace.harris@example.com",
      role: "client",
      id: 9,
    },
    employee: {
      firstName: "Henry",
      lastName: "Irvine",
      email: "henry.irvine@example.com",
      role: "employee",
      id: 10,
    },
    date: new Date(),
    service: {
      id: 5,
      name: "Acupuncture",
      price: 90,
      description: "An acupuncture treatment session.",
      duration: 60,
      place: {
        name: "Wellness Room",
        capacity: 3,
      },
    },
  },
  {
    id: 6,
    client: {
      firstName: "Ivy",
      lastName: "Jackson",
      email: "ivy.jackson@example.com",
      role: "client",
      id: 11,
    },
    employee: {
      firstName: "Jack",
      lastName: "King",
      email: "jack.king@example.com",
      role: "employee",
      id: 12,
    },
    date: new Date(),
    service: {
      id: 6,
      name: "Nutrition",
      price: 110,
      description: "A nutrition consultation session.",
      duration: 60,
      place: {
        name: "Consultation Room",
        capacity: 2,
      },
    },
  },
  {
    id: 7,
    client: {
      firstName: "Karen",
      lastName: "Lewis",
      email: "karen.lewis@example.com",
      role: "client",
      id: 13,
    },
    employee: {
      firstName: "Leo",
      lastName: "Miller",
      email: "leo.miller@example.com",
      role: "employee",
      id: 14,
    },
    date: new Date(),
    service: {
      id: 7,
      name: "Physical Therapy",
      price: 130,
      description: "A physical therapy session.",
      duration: 75,
      place: {
        name: "Therapy Room",
        capacity: 4,
      },
    },
  },
  {
    id: 8,
    client: {
      firstName: "Mia",
      lastName: "Nelson",
      email: "mia.nelson@example.com",
      role: "client",
      id: 15,
    },
    employee: {
      firstName: "Nate",
      lastName: "Owens",
      email: "nate.owens@example.com",
      role: "employee",
      id: 16,
    },
    date: new Date(),
    service: {
      id: 8,
      name: "Yoga",
      price: 70,
      description: "A yoga session.",
      duration: 60,
      place: {
        name: "Yoga Studio",
        capacity: 10,
      },
    },
  },
  {
    id: 9,
    client: {
      firstName: "Olivia",
      lastName: "Parker",
      email: "olivia.parker@example.com",
      role: "client",
      id: 17,
    },
    employee: {
      firstName: "Paul",
      lastName: "Quinn",
      email: "paul.quinn@example.com",
      role: "employee",
      id: 18,
    },
    date: new Date(),
    service: {
      id: 9,
      name: "Pilates",
      price: 75,
      description: "A pilates session.",
      duration: 60,
      place: {
        name: "Pilates Studio",
        capacity: 8,
      },
    },
  },
  {
    id: 10,
    client: {
      firstName: "Quinn",
      lastName: "Reed",
      email: "quinn.reed@example.com",
      role: "client",
      id: 19,
    },
    employee: {
      firstName: "Rachel",
      lastName: "Scott",
      email: "rachel.scott@example.com",
      role: "employee",
      id: 20,
    },
    date: new Date(),
    service: {
      id: 10,
      name: "Personal Training",
      price: 200,
      description: "A personal training session.",
      duration: 60,
      place: {
        name: "Gym",
        capacity: 1,
      },
    },
  },
  {
    id: 11,
    client: {
      firstName: "Sam",
      lastName: "Taylor",
      email: "sam.taylor@example.com",
      role: "client",
      id: 21,
    },
    employee: {
      firstName: "Tina",
      lastName: "Upton",
      email: "tina.upton@example.com",
      role: "employee",
      id: 22,
    },
    date: new Date(),
    service: {
      id: 11,
      name: "Dermatology",
      price: 180,
      description: "A dermatology consultation.",
      duration: 45,
      place: {
        name: "Clinic Room 2",
        capacity: 2,
      },
    },
  },
];

const AppointmentInfo = () => {

  const navigate = useNavigate();

  const cancelAppointment = (appointment: Appointment) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      console.log(`Cancel appointment on: ${appointment.date}`);
    }
  }

  const onViewMore = (appointment: Appointment) => {
    navigate(`/appointments/${appointment.id}`);
  }

  return (
    <Box display={"flex"} flexDirection={"column"}
         alignItems={"center"} justifyContent={"center"} height={"86.1vh"}>
      <Typography variant={"h4"}
      sx={{
        fontWeight: 'bold',
        fontSize: {
          xs: '1.5rem',
          sm: '2rem'
        }
      }}>
        My Appointments
      </Typography>
      {appointmentsDummyData && appointmentsDummyData.length === 0 ? (
        <AppointmentEmpty/>
      ) : (
        <PaginationAppointments appointments={appointmentsDummyData}
                                onCancel={(a) => cancelAppointment(a)}
                                onViewMore={onViewMore}/>
      )}
    </Box>
  );
};

export default AppointmentInfo;