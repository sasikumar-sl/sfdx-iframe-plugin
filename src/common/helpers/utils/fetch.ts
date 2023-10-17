export function objectToQueryParams<TArquType>(obj: TArquType | any): string {
  return Object.keys(obj)
    .reduce((params, key) => {
      params.append(key, obj[key]);
      return params;
    }, new URLSearchParams())
    .toString();
}

export function getPostHeadersWithBody(params?: any): any {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: params ? JSON.stringify(params) : null,
  };
}
