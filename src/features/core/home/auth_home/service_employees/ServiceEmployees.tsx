import {useState} from "react";
import {Box, Button, Card, CardActions, CardContent, Grid, Modal, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ServiceWithUsers} from "../../../../../models/service.types.ts";

interface ServiceEmployeesProps {
  selectedService: ServiceWithUsers | null;
  navigate: ReturnType<typeof useNavigate>;
  open: boolean;
  onClose: () => void;
}

const ServiceEmployees = ({selectedService, navigate, open, onClose}: ServiceEmployeesProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const employeesPerPage = 2;

  if (!selectedService) return null;

  const totalPages = Math.ceil(selectedService.employees.length / employeesPerPage);

  const handleNextPage = () => {
    if ((currentPage + 1) * employeesPerPage < selectedService.employees.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * employeesPerPage;
  const endIndex = startIndex + employeesPerPage;
  const currentEmployees = selectedService.employees.slice(startIndex, endIndex);

  return (
    <Modal open={open} onClose={onClose}>
      <Box p={4} bgcolor={'white'} m={'auto'} mt={'10%'} maxWidth={'600px'}>
        <Typography variant={"h6"}>
          Our Experts for {selectedService.name}
        </Typography>
        <Grid container spacing={2} mt={2}>
          {currentEmployees.map((employee, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent sx={{textAlign: 'center'}}>
                  <Typography variant={"h6"} fontWeight={'bold'}>
                    {employee.firstName} {employee.lastName}
                  </Typography>
                  <Typography variant={"body2"} color={'gray'} mt={1}>
                    {employee.email}
                  </Typography>
                  <Typography variant={"body2"} color={'gray'} mt={1}>
                    {employee.role}
                  </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                  <Button size={"small"}
                          onClick={() => navigate(`/book/${selectedService.id}/${employee.id}`)}>
                    Book with {employee.firstName}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mt={2}>
          <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
            Previous
          </Button>
          <Typography variant={"body2"}>
            {currentPage + 1} / {totalPages}
          </Typography>
          <Button onClick={handleNextPage}
                  disabled={endIndex >= selectedService.employees.length}>
            Next
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ServiceEmployees;