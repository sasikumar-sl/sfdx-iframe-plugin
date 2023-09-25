type TParams = {
  sentiments: number;
  annotations?: number;
};

export type TPath = [string, TParams];

export function getPath(queryKey: TPath): string {
  const [key, object] = queryKey;
  return `${Object.entries(object).reduce(
    (acc, [k, v]) => `${acc}${k}[${v}].`,
    '',
  )}${key}`;
}
