import {MutationCache, QueryCache, QueryClient} from '@tanstack/react-query';
import {toast} from "react-toastify";
import {AxiosError} from 'axios';

const handleError = (error: any) => {
  let description = 'Unsuccessful operation!';

  if (error instanceof AxiosError) {
    const errorBody = error.response?.data;

    if (errorBody && errorBody.errors) description = errorBody.errors[0];
    else if (errorBody && errorBody.detail) description = errorBody.detail;
  }

  toast.error(description);
};

const handleSuccess = () => {
  toast.success("Operation completed successfully.");
}

// Defining global error handlers for the query and mutation caches
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      handleError(error)
    },
    onSuccess: () => {
      handleSuccess()
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      handleError(error)
    },
    onSuccess: () => {
      handleSuccess()
    }
  }),
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 50, // 50 minutes
      gcTime: 1000 * 60 * 60, // 1 hour
    }
  }
});
