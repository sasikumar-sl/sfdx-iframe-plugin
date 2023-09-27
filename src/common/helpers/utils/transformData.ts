import { TGetUserCase, TUserCaseDetails } from '../../lib/types';

const initialValue: TUserCaseDetails = {
  userId: '',
  userName: '',
  caseId: '',
  caseNumber: '',
};

export function getTransformedUserCaseDetails(
  details: unknown,
): TUserCaseDetails {
  // eslint-disable-next-line no-console
  console.log('============== plugin tansform: ', details);
  if (!details) return initialValue;
  const { user = '', record = '' } = details as TGetUserCase;

  const [userDetails] = typeof user === 'string' ? JSON.parse(user) : user;
  const [caseDetails] =
    typeof record === 'string' ? JSON.parse(record) : record;

  return {
    userId: userDetails?.Id ?? initialValue.userId,
    userName: userDetails?.Name ?? initialValue.userName,
    caseId: caseDetails?.Id ?? initialValue.caseId,
    caseNumber: caseDetails?.CaseNumber ?? initialValue.caseNumber,
  };
}
