import {createContext, ReactNode, useState} from 'react';
import {Alert, Snackbar} from '@mui/material';

interface ToasterContextProps {
  showError: (message: string) => void;
}

export const ToasterContext = createContext<ToasterContextProps | undefined>(undefined);

const ToasterProvider = ({children}: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const showError = (message: string) => {
    setMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ToasterContext.Provider value={{showError}}>
      {children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
          {message}
        </Alert>
      </Snackbar>
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;
