import React, { useContext, createContext } from 'react';
import noop from 'lodash/noop';
import { TSalesforceData, sfDefaultValue } from '../common';

export type TCaseContext = {
  hasError: boolean;
  salesforceData: TSalesforceData;

  currentCommentIdx: number;
  setCurrentCommentIdx: React.Dispatch<React.SetStateAction<number>>;
  isCaseDetailsLoading: boolean;
  isCaseCommentsLoading: boolean;
  isCaseAnnotationsLoading: boolean;
};

export const CaseContext = createContext<TCaseContext>({
  hasError: false,
  salesforceData: sfDefaultValue,

  currentCommentIdx: 0,
  setCurrentCommentIdx: noop,

  isCaseDetailsLoading: false,
  isCaseCommentsLoading: false,
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
