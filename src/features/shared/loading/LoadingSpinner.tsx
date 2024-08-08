import {CircularProgress} from "@mui/material";
import {LoadingContext} from "../../core/context/LoadingContext.tsx";
import {useContext} from "react";

const LoadingSpinner = () => {
  const loadingContext = useContext(LoadingContext);

  const {isLoading} = loadingContext!;

  return (
    <>
      {isLoading && (
        <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          <CircularProgress/>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;