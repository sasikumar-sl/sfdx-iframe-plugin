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

export function getSFHeaders(data: TSalesforceData): TSFCustomHeaders {
  return {
    instance_url: data.instance_url,
    user_id: data.user_id,
    session: data.session_value,
  };
}
