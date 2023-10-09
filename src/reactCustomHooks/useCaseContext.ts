import React, { useContext, createContext } from 'react';
import noop from 'lodash/noop';
import { TUserAndCaseDetails, userAndCaseDefaultValue } from '../common';

export type TCaseContext = {
  hasError: boolean;
  isLoading: boolean;
  userAndCaseDetails: TUserAndCaseDetails;
  currentSentimentIdx: number;
  setCurrentSentimentIdx: React.Dispatch<React.SetStateAction<number>>;

  currentCommentIdx: number;
  setCurrentCommentIdx: React.Dispatch<React.SetStateAction<number>>;
  isCaseScoresLoading: boolean;
  isCaseSentimentLoading: boolean;
};

export const CaseContext = createContext<TCaseContext>({
  hasError: false,
  isLoading: false,
  userAndCaseDetails: userAndCaseDefaultValue,

  currentSentimentIdx: 0,
  setCurrentSentimentIdx: noop,

  currentCommentIdx: 0,
  setCurrentCommentIdx: noop,

  isCaseScoresLoading: false,
  isCaseSentimentLoading: false,
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
