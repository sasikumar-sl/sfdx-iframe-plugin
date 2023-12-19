import { getSFHeaders, getHeadersWithBody } from '../../helpers';
import { baseUrl, caseDetailsEndPoint } from '../../constants';
import { TSFCustomHeaders, TSalesforceData } from '../../lib';

export type TGetCaseDetilsParams = {
  limit?: number;
  sortKey?: string;
  orderBy?: 'asc' | 'desc';
};

type TCommonParams = {
  salesforceData: TSalesforceData;
};

export function getCaseBasedDetails({
  salesforceData,
}: TCommonParams): Promise<any> {
  const sfHeaders: TSFCustomHeaders = getSFHeaders(salesforceData);
  // const url = `${salesforceData?.sl_api_url}/api/iframe/case/${salesforceData.parent_id}`;
  const base = salesforceData?.sl_api_url ?? baseUrl;
  const url = `${base}/${caseDetailsEndPoint}/${salesforceData.parent_id}`;
  return fetch(url, {
    ...getHeadersWithBody(null, sfHeaders),
  })
    .then((response) => response.json())
    .then((response: any) => {
      if (response?.error || response?.status >= 400) {
        // eslint-disable-next-line no-console
        return Promise.reject(response.message);
      }
      return response;
    })
    .then((response) => response.data);
}
