import {MutationCache, QueryCache, QueryClient} from '@tanstack/react-query';

// Defining global error handlers for the query and mutation caches
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error('QueryClient error  - ', error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => { // cache-level mutations error handler
      console.error('MutationCache error - ', error);
    },
  }),
});

export default queryClient;