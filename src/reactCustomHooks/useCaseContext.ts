import React, { useContext, createContext } from 'react';
import noop from 'lodash/noop';
import { TSalesforceData, sfDefaultValue } from '../common';

export type TCaseContext = {
  hasError: boolean;
  salesforceData: TSalesforceData;

  currentSegmentIdx: number;
  setCurrentSegmentIdx: React.Dispatch<React.SetStateAction<number>>;
  isCaseDetailsLoading: boolean;
};

export const CaseContext = createContext<TCaseContext>({
  hasError: false,
  salesforceData: sfDefaultValue,

  currentSegmentIdx: 0,
  setCurrentSegmentIdx: noop,

  isCaseDetailsLoading: false,
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
