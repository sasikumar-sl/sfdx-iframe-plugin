import { useSearchParams } from 'react-router-dom';
import fromPairs from 'lodash/fromPairs';
import pick from 'lodash/pick';

export function useSearchParamsObject<TData>(keysToExtract?: any): TData {
  const [searchParams] = useSearchParams();

  const paramsObject = fromPairs(Array.from(searchParams.entries()));

  return pick(paramsObject, keysToExtract) as TData;
}
