export function objectToQueryParams<TArquType>(obj: TArquType | any): string {
  return Object.keys(obj)
    .reduce((params, key) => {
      params.append(key, obj[key]);
      return params;
    }, new URLSearchParams())
    .toString();
}
