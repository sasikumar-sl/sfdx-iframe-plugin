// import { objectToQueryParams } from './queryParams';

export function waitResolve(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
export function waitReject(duration = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Create an error object
      const error = new Error('Timeout occurred');
      // Reject the promise with the error
      reject(error);
    }, duration);
  });
}

export type TGetCaseDetilsParams = {
  limit?: number;
  sortKey?: string;
  orderBy?: 'asc' | 'desc';
};

export function getCaseDetails(options?: TGetCaseDetilsParams) {
  const params = {
    limit: options?.limit ?? 5,
    sort_key: options?.sortKey ?? 'created_at',
    order_by: options?.orderBy ?? 'desc',
  };
  // const queryParams: string = objectToQueryParams<TGetCaseDetilsParams>(params);
  return fetch('https://server-r.deno.dev/api/v1/case', {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
}
