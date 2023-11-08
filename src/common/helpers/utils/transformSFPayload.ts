/* eslint-disable no-console */
import { TSalesforceData } from '../../lib/types';

// function validate<TReturnData>(data: unknown): TReturnData {
//   return typeof data === 'string'
//     ? JSON.parse(data?.replaceAll(/\\/g, ''))
//     : data;
// }

export const sfDefaultValue: TSalesforceData = {
  subtype: '', // salesforce
  type: '', // crm
  instance_url: '', // https://supportlogic-2d-dev-ed.develop.my.salesforce.com
  parent_type: '', // case
  parent_id: '1', // caseId - 500Hr00001XXFAgIAP
  parent_number: '1', // caseNumber -00001029
  user_id: '', // userId
  session_value: '', // 00DHr000001s05n!AQsAQFN55Sv0gXlVHGjKMfmhXXHAte3N.PyfyedFOuRjpc.45UaXZCaAFu1tZ
  sl_api_url: '', // test-max.supportlogic.io
};

export function getTransformSFPayload(
  payload: TSalesforceData,
): TSalesforceData {
  return { ...sfDefaultValue, ...payload };
}
