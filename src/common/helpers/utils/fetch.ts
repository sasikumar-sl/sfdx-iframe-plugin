import { TSalesforceData, TSFCustomHeaders } from '../../lib';

export function objectToQueryParams<TArquType>(obj: TArquType | any): string {
  return Object.keys(obj)
    .reduce((params, key) => {
      params.append(key, obj[key]);
      return params;
    }, new URLSearchParams())
    .toString();
}

export function getPostHeadersWithBody(
  payload?: any,
  headers?: TSFCustomHeaders,
): any {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    body: payload ? JSON.stringify(payload) : null,
  };
}

export function getHeadersWithBody(
  payload?: any,
  headers?: TSFCustomHeaders,
): any {
  return {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    ...(payload ? { body: JSON.stringify(payload) } : {}),
  };
}

export function getSFHeaders(data: TSalesforceData): TSFCustomHeaders {
  return {
    'Instance-Url': data.instance_url,
    'User-Id': data.user_id,
    'Session-Id': data.session_value,
    'Parent-Id': data.parent_id,
  };
}
