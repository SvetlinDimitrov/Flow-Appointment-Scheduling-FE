import { User, UserRole } from '../../../shared/models/user.types.ts';
import PaginatedUserSection from "./user-list/PaginatedUserList.tsx";

const users: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 50000,
      profit: 10000,
      completedAppointments: 150,
      experience: 5,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 45000,
      profit: 8000,
      completedAppointments: 120,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Brown",
    email: "bob.brown@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 52000,
      profit: 11000,
      completedAppointments: 160,
      experience: 6,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Davis",
    email: "charlie.davis@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 46000,
      profit: 8500,
      completedAppointments: 125,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 6,
    firstName: "David",
    lastName: "Evans",
    email: "david.evans@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 7,
    firstName: "Eve",
    lastName: "Foster",
    email: "eve.foster@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 53000,
      profit: 11500,
      completedAppointments: 170,
      experience: 7,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 8,
    firstName: "Frank",
    lastName: "Green",
    email: "frank.green@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 47000,
      profit: 9000,
      completedAppointments: 130,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 9,
    firstName: "Grace",
    lastName: "Harris",
    email: "grace.harris@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 10,
    firstName: "Hank",
    lastName: "Ivy",
    email: "hank.ivy@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 54000,
      profit: 12000,
      completedAppointments: 180,
      experience: 8,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 11,
    firstName: "Ivy",
    lastName: "Jones",
    email: "ivy.jones@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 55000,
      profit: 12500,
      completedAppointments: 190,
      experience: 9,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 12,
    firstName: "Jack",
    lastName: "King",
    email: "jack.king@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 46000,
      profit: 8500,
      completedAppointments: 125,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 13,
    firstName: "Karen",
    lastName: "Lee",
    email: "karen.lee@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 14,
    firstName: "Liam",
    lastName: "Miller",
    email: "liam.miller@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 56000,
      profit: 13000,
      completedAppointments: 200,
      experience: 10,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 15,
    firstName: "Mia",
    lastName: "Nelson",
    email: "mia.nelson@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 47000,
      profit: 9000,
      completedAppointments: 130,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 16,
    firstName: "Noah",
    lastName: "Owen",
    email: "noah.owen@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 17,
    firstName: "Olivia",
    lastName: "Parker",
    email: "olivia.parker@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 57000,
      profit: 13500,
      completedAppointments: 210,
      experience: 11,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 18,
    firstName: "Paul",
    lastName: "Quinn",
    email: "paul.quinn@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 48000,
      profit: 9500,
      completedAppointments: 135,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 19,
    firstName: "Quinn",
    lastName: "Reed",
    email: "quinn.reed@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 20,
    firstName: "Ryan",
    lastName: "Scott",
    email: "ryan.scott@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 58000,
      profit: 14000,
      completedAppointments: 220,
      experience: 12,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 21,
    firstName: "Sophia",
    lastName: "Taylor",
    email: "sophia.taylor@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 49000,
      profit: 10000,
      completedAppointments: 140,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 22,
    firstName: "Thomas",
    lastName: "Upton",
    email: "thomas.upton@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 23,
    firstName: "Uma",
    lastName: "Vance",
    email: "uma.vance@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 59000,
      profit: 14500,
      completedAppointments: 230,
      experience: 13,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 24,
    firstName: "Victor",
    lastName: "Wright",
    email: "victor.wright@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 50000,
      profit: 10500,
      completedAppointments: 145,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 25,
    firstName: "Wendy",
    lastName: "Xavier",
    email: "wendy.xavier@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 26,
    firstName: "Xander",
    lastName: "Young",
    email: "xander.young@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 60000,
      profit: 15000,
      completedAppointments: 240,
      experience: 14,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 27,
    firstName: "Yara",
    lastName: "Zimmer",
    email: "yara.zimmer@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 51000,
      profit: 11000,
      completedAppointments: 150,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  },
  {
    id: 28,
    firstName: "Zane",
    lastName: "Adams",
    email: "zane.adams@example.com",
    role: UserRole.CLIENT,
    employeeData: null
  },
  {
    id: 29,
    firstName: "Aaron",
    lastName: "Baker",
    email: "aaron.baker@example.com",
    role: UserRole.ADMINISTRATOR,
    employeeData: {
      salary: 61000,
      profit: 15500,
      completedAppointments: 250,
      experience: 15,
      beginWorkingHour: new Date("2023-01-01T09:00:00"),
      endWorkingHour: new Date("2023-01-01T17:00:00")
    }
  },
  {
    id: 30,
    firstName: "Bella",
    lastName: "Carter",
    email: "bella.carter@example.com",
    role: UserRole.EMPLOYEE,
    employeeData: {
      salary: 52000,
      profit: 11500,
      completedAppointments: 160,
      experience: 4,
      beginWorkingHour: new Date("2023-01-01T08:00:00"),
      endWorkingHour: new Date("2023-01-01T16:00:00")
    }
  }
];

const handleEdit = (user: User) => {
  console.log('Edit user:', user);
};

const handleDelete = (user: User) => {
  const isConfirmed = window.confirm(`Are you sure you want to delete the user: ${user.firstName} ${user.lastName}?`);
  if (isConfirmed) {
    console.log('Delete user:', user);
  }
};

const handleAssignToService = (user: User) => {
  console.log('Assign user to service:', user);
};

const AdminDashboardUsers = () => {
  const administrators = users.filter(user => user.role === UserRole.ADMINISTRATOR);
  const employees = users.filter(user => user.role === UserRole.EMPLOYEE);
  const clients = users.filter(user => user.role === UserRole.CLIENT);

  return (
    <div>
      <PaginatedUserSection
        title="Administrators"
        users={administrators}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
      />
      <PaginatedUserSection
        title="Employees"
        users={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
      />
      <PaginatedUserSection
        title="Clients"
        users={clients}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAssignToService={handleAssignToService}
      />
    </div>
  );
};

export default AdminDashboardUsers;