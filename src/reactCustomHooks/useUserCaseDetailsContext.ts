import { useContext, createContext } from 'react';
import { TUserCaseDetails } from '../common';

export type TUserCaseDetailsContext = {} & TUserCaseDetails;

export const UserCaseDetailsContext = createContext<TUserCaseDetailsContext>({
  userId: '',
  userName: '',
  caseId: '',
  caseNumber: '',
});

export function useUserCaseDetailsContext() {
  const context = useContext(UserCaseDetailsContext);

  if (!context) {
    throw new Error(
      'useUserCaseDetailsContext must be used within a UserCaseDetailsContext.Provider',
    );
  }

  return context;
}
