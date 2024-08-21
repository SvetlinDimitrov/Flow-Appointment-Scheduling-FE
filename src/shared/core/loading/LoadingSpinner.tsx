import {useIsFetching, useIsMutating} from "@tanstack/react-query";
import {CircularProgress} from "@mui/material";
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  if (isFetching || isMutating) {
    return (
      <div className={styles.spinnerContainer}>
        <CircularProgress color={'primary'} size={80}/>
      </div>
    );
  }

  return <div></div>;
};

export default LoadingSpinner;