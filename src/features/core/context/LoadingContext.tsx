import React, {createContext, ReactNode, useState} from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({children}: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{isLoading, setLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;