import { TGetUserCase, TUserCaseDetails } from '../../lib/types';

const defaultValue: TUserCaseDetails = {
  userId: '',
  userName: '',
  caseId: '',
  caseNumber: '',
};

export function getTransformedUserCaseDetails(
  item: unknown,
): TUserCaseDetails {
  // eslint-disable-next-line no-console
  console.log('============== plugin tansform: ', item);
  if (!item) return defaultValue;
  // const { user, record } = details as TGetUserCase;
  return defaultValue;

  // const [userDetails] = typeof user === 'string' ? JSON.parse(user) : user;
  // const [etails] = typeof user === 'string' ? JSON.parse(user) : user;

  // return {
  //   userId: user?.[0]?.Id ?? initialValue.userId,
  //   userName: user?[0]?.Name ?? initialValue.userName,
  //   caseId: record?.[0]?.Id ?? initialValue.caseId,
  //   caseNumber: record?.[0]?.CaseNumber ?? initialValue.caseNumber,
  // };
}
