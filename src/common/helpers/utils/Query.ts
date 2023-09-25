// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryCache } from '@tanstack/react-query';

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1800000,
      cacheTime: 150000,
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
  queryCache,
});
