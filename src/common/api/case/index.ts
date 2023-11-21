import {
  getSFHeaders,
  getHeadersWithBody,
  objectToQueryParams,
  getPostHeadersWithBody,
} from '../../helpers';
import { baseUrl } from '../../constants';
import { TSFCustomHeaders, TSalesforceData } from '../../lib';

export type TGetCaseDetilsParams = {
  limit?: number;
  sortKey?: string;
  orderBy?: 'asc' | 'desc';
};

export function getCaseDetails({
  limit,
  sortKey,
  orderBy,
}: TGetCaseDetilsParams): Promise<any> {
  const params = {
    limit: limit ?? 5,
    sort_key: sortKey ?? 'created_at',
    order_by: orderBy ?? 'desc',
  };
  return fetch(`${baseUrl}/api/v1/case`, { ...getPostHeadersWithBody(params) })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return Promise.reject(response.message);
      }
      return response;
    })
    .then((response) => response.data);
}

type TCommonParams = {
  salesforceData: TSalesforceData;
};

export function getCaseBasedDetails({
  salesforceData,
}: TCommonParams): Promise<any> {
  const sfHeaders: TSFCustomHeaders = getSFHeaders(salesforceData);
  const queryParams = objectToQueryParams<any>({
    id: salesforceData.parent_id,
  });

  const url = `https://iframe.develop1.supportlogic.io/api_tmp/case/${salesforceData.parent_id}?${queryParams}`;
  // const url = `${salesforceData?.sl_api_url}/api/iframe/case/${salesforceData.parent_id}?${queryParams}`;
  // eslint-disable-next-line no-console
  console.log(
    '============================ Iframe Case Link & SF Data: ',
    url,
    salesforceData,
  );
  return fetch(url, {
    ...getHeadersWithBody(null, sfHeaders),
  })
    .then((response) => response.json())
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(
        '================= ERROR: ',
        response?.error,
        response?.message,
        url,
      );
      if (response.error) {
        // eslint-disable-next-line no-console
        return Promise.reject(response.message);
      }
      return response;
    })
    .then((response) => response.data);
}
export function getCaseScores({ salesforceData }: TCommonParams): Promise<any> {
  const payload = {
    selected: ['sl_sentiment_score', 'sl_need_attention_score', 'sl_ticket_id'],
    predicates: [
      {
        column: 'sl_ticket_id',
        op: '=',
        value: salesforceData.parent_id ?? '5002E00001xkvaDQAQ',
      },
    ],
    ordering: [
      {
        column: 'id',
        direction: 'asc',
      },
    ],
  };
  const queryParams = objectToQueryParams<any>({
    page_number: 0,
    page_size: 5,
  });
  const sfHeaders: TSFCustomHeaders = getSFHeaders(salesforceData);

  return fetch(`${baseUrl}/api/v2/case/summary/search?${queryParams}`, {
    ...getPostHeadersWithBody(payload, sfHeaders),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return Promise.reject(response.message);
      }
      return response;
    })
    .then((response) => response.data?.[0]);
}

export function getCaseSentiments({
  salesforceData,
}: TCommonParams): Promise<any> {
  const payload = {
    selected: [
      'sl_comment_id',
      'sl_span_counts',
      'spans',
      'sl_body',
      'sl_created_at',
      'sl_author_name',
    ],

    ordering: [
      {
        column: 'sl_case_id',
        direction: 'desc',
      },
    ],
    predicates: [
      {
        column: 'sl_ticket_id',
        op: '=',
        value: salesforceData.parent_id ?? '5002E00001xkvaDQAQ',
      },
    ],
  };

  const queryParams = objectToQueryParams<any>({
    page_number: 0,
    page_size: 5,
  });

  const sfHeaders: TSFCustomHeaders = getSFHeaders(salesforceData);

  return fetch(`${baseUrl}/api/v2/case/comment/search?${queryParams}`, {
    ...getPostHeadersWithBody(payload, sfHeaders),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return Promise.reject(response.message);
      }
      return response;
    })
    .then((response) => response.data);
}

type TCaseCommentParams = TCommonParams & {
  annotations?: any[];
};

export function getcaseAnnotations({
  salesforceData,
}: TCommonParams): Promise<any> {
  const payload = {
    page_size: 100,
    page_number: 0,
    sort_key: 's_created_at',
    sort_direction: 'desc',
    filter_list: [
      { column: 'note_type', op: '=', value: 'SH_DISCUSSION' },
      { column: 'group_key', op: '=', value: salesforceData.parent_id },
      { column: 'parent:s_id', op: 'is_null' },
    ],
  };
  const sfHeaders: TSFCustomHeaders = getSFHeaders(salesforceData);

  return fetch(`${baseUrl}/api/v2/note/query`, {
    ...getPostHeadersWithBody(payload, sfHeaders),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return Promise.reject(response.message);
      }
      return response;
    })
    .then((response) => response.data);
}

export function getCaseCommentSegments({
  salesforceData,
  annotations,
}: TCaseCommentParams): Promise<any> {
  const payload = {
    page_size: 5,
    page_number: 0,
    sort_key: 's_created_at',
    sort_direction: 'desc',
    filter_list: [
      {
        column: 's_id',
        op: 'in',
        value: (annotations ?? []).map((x) => x.object_owner.object_id),
      },
    ],
  };

  const sfHeaders: TSFCustomHeaders = getSFHeaders(salesforceData);

  return fetch(`${baseUrl}/api/v2/content/segment/query`, {
    ...getPostHeadersWithBody(payload, sfHeaders),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return Promise.reject(response.message);
      }
      return response;
    })
    .then((response) => response.data);
}
