import {MutationCache, QueryCache, QueryClient} from '@tanstack/react-query';
import {useContext} from "react";
import {ToasterContext} from "../../features/shared/context/ToasterContext.tsx";

const handleError = (error: Error) => {
  const {showError} = useContext(ToasterContext)!;
  showError(error.message);
  console.error('Error - ', error.message);
};

// Defining global error handlers for the query and mutation caches
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleError,
  }),
  mutationCache: new MutationCache({
    onError: handleError,
  }),
});
