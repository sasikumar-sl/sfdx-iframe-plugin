// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient } from '@tanstack/react-query';

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
});
