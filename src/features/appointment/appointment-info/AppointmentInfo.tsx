import {Box, Typography} from '@mui/material';
import AppointmentEmpty from "./empty-appointment/AppointmentEmpty.tsx";
import PaginationAppointments from "./appointment-list/PaginationAppointments.tsx";
import {Appointment} from "../../../shared/models/appointment.types.ts";
import {useNavigate} from "react-router-dom";
import {UserRole} from "../../../shared/models/user.types.ts";

const appointmentsDummyData: Appointment[] = [
  {
    id: 1,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 3,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 4,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 5,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 6,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 7,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 8,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 9,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 10,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
    id: 11,
    client: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: UserRole.CLIENT,
      id: 1,
      employeeData: null
    },
    employee: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: UserRole.EMPLOYEE,
      id: 2,
      employeeData: {
        salary: 50000,
        profit: 10000,
        completedAppointments: 100,
        experience: 5,
        beginWorkingHour: new Date(0, 0, 0, 9, 0),
        endWorkingHour: new Date(0, 0, 0, 17, 0),
      }
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
                                onCancel={cancelAppointment}
                                onViewMore={onViewMore}/>
      )}
    </Box>
  );
};

export default AppointmentInfo;