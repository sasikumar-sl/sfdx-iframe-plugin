import { useQueryClient } from '@tanstack/react-query';

export type TQueryKey = readonly [string, ...any[]];

export const useGetFetchQuery = ({
  queryKey,
  transform,
}: {
  queryKey: TQueryKey;
  transform?: (data: any) => any;
}): any => {
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(queryKey);

  if (!transform) return cachedData;

  return transform(cachedData);
};
