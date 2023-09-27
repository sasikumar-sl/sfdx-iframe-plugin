import { TGetUserCase, TUserCaseDetails } from '../../lib/types';

const defaultValue: TUserCaseDetails = {
  userId: '',
  userName: '',
  caseId: '',
  caseNumber: '',
};

export function getTransformedUserCaseDetails(item: any): TUserCaseDetails {
  if (!item) return defaultValue;
  // eslint-disable-next-line no-console
  console.log('============== plugin tansform: ', typeof item?.user);
  if (typeof item?.user === 'string') {
    const str = item?.user?.replaceAll(/\\/g, '');

  // eslint-disable-next-line no-console
    console.log('========== plugin String: ', str, JSON.parse(str).Id);
  }
  const { user, record } = item as TGetUserCase;

  const [userDetails] =
    typeof user === 'string' ? JSON.parse(user?.replaceAll(/\\/g, '')) : user;
  const [caseDetails] =
    typeof record === 'string'
      ? JSON.parse(record?.replaceAll(/\\/g, ''))
      : record;

  return {
    userId: userDetails?.Id ?? defaultValue.userId,
    userName: userDetails?.Name ?? defaultValue.userName,
    caseId: caseDetails?.Id ?? defaultValue.caseId,
    caseNumber: caseDetails?.CaseNumber ?? defaultValue.caseNumber,
  };
}
