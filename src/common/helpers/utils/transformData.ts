/* eslint-disable no-console */
import { ArrayType, TGetUserCase, TUserAndCaseDetails } from '../../lib/types';

export const userAndCaseDefaultValue: TUserAndCaseDetails = {
  userId: '',
  userName: '',
  caseId: '',
  caseNumber: '',
};

function validate<TReturnData>(data: unknown): TReturnData {
  return typeof data === 'string'
    ? JSON.parse(data?.replaceAll(/\\/g, ''))
    : data;
}

// Extract the type of 'user' property
type UserType = ArrayType<TGetUserCase['user']>;

// Extract the type of 'record' property
type RecordType = ArrayType<TGetUserCase['record']>;

export function getTransformedUserCaseDetails(
  item: TGetUserCase,
): TUserAndCaseDetails {
  if (!item) return userAndCaseDefaultValue;

  const user: UserType = validate<UserType>(item?.user);
  const record: RecordType = validate<RecordType>(item?.record);

  console.log('==========:  from child user: ', user);
  console.log('==========:  from child record: ', record);

  return {
    userId: user?.[0]?.Id ?? userAndCaseDefaultValue.userId,
    userName: user?.[0]?.Name ?? userAndCaseDefaultValue.userName,
    caseId: record?.[0]?.Id ?? userAndCaseDefaultValue.caseId,
    caseNumber: record?.[0]?.CaseNumber ?? userAndCaseDefaultValue.caseNumber,
  };
}
