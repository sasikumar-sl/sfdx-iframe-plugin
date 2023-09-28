import { TGetUserCase, TUserCaseDetails } from '../../lib/types';

const defaultValue: TUserCaseDetails = {
  userId: '',
  userName: '',
  caseId: '',
  caseNumber: '',
};

export function getTransformedUserCaseDetails(
  item: TGetUserCase,
): TUserCaseDetails {
  if (!item) return defaultValue;

  const userD =
    typeof item?.user === 'string'
      ? JSON.parse(item?.user?.replaceAll(/\\/g, ''))
      : item?.user;
  const caseD =
    typeof item?.record === 'string'
      ? JSON.parse(item?.record?.replaceAll(/\\/g, ''))
      : item?.record;

  // eslint-disable-next-line no-console
  console.log('==================:  from child userD, caseD: ', userD, caseD);

  return {
    userId: userD?.[0]?.Id ?? defaultValue.userId,
    userName: userD?.[0]?.Name ?? defaultValue.userName,
    caseId: caseD?.[0]?.Id ?? defaultValue.caseId,
    caseNumber: caseD?.[0]?.CaseNumber ?? defaultValue.caseNumber,
  };
}
