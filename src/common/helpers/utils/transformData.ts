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
  if (!details) return initialValue;
  const { user = null, record = null } = details as TGetUserCase;

  return {
    userId: user?.[0]?.Id ?? initialValue.userId,
    userName: user?.[0]?.Name ?? initialValue.userName,
    caseId: record?.[0]?.Id ?? initialValue.caseId,
    caseNumber: record?.[0]?.CaseNumber ?? initialValue.caseNumber,
  };
}
