import React, { useContext, createContext } from 'react';
import noop from 'lodash/noop';
import { TUserAndCaseDetails, userAndCaseDefaultValue } from '../common';

export type TCaseContext = {
  hasError: boolean;
  userAndCaseDetails: TUserAndCaseDetails;

  currentCommentIdx: number;
  setCurrentCommentIdx: React.Dispatch<React.SetStateAction<number>>;
  isCaseScoresLoading: boolean;
  isCaseCommentsLoading: boolean;
  isCaseSentimentsLoading: boolean;
  isCaseAnnotationsLoading: boolean;
};

export const CaseContext = createContext<TCaseContext>({
  hasError: false,
  userAndCaseDetails: userAndCaseDefaultValue,

  currentCommentIdx: 0,
  setCurrentCommentIdx: noop,

  isCaseScoresLoading: false,
  isCaseCommentsLoading: false,
  isCaseSentimentsLoading: false,
  isCaseAnnotationsLoading: false,
});

function useCaseContext() {
  const context = useContext(CaseContext);

  if (!context) {
    throw new Error(
      'useCaseContext must be used within a CaseContext.Provider',
    );
  }

  return context;
}

export default useCaseContext;
