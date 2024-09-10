import {Box, CircularProgress} from "@mui/material";

interface LoaderProps {
  height: string | number;
}

const ContainerLoader = ({height}: LoaderProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height={height}
    >
      <CircularProgress />
    </Box>
  );
};

export default ContainerLoader;