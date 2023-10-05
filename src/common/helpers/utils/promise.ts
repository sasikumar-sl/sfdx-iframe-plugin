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
