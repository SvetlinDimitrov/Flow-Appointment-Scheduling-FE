import {useIsFetching, useIsMutating} from "@tanstack/react-query";
import {CircularProgress} from "@mui/material";

const LoadingSpinner = () => {

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  if (isFetching || isMutating) {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '999'
      }}>
        <CircularProgress color={'primary'} size={80}/>
      </div>
    );
  }

  return null;
};

export default LoadingSpinner;