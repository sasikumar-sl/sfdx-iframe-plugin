import { useContext, createContext } from 'react';
import noop from 'lodash/noop';

export type TCaseContext = {
  isLoading: boolean;
  currentSentimentIdx: number;
  handleSentimentChanges: (idx: number) => void;

  currentAnnotationIdx: number;
  handleAnnotationChanges: (idx: number) => void;
};

export const CaseContext = createContext<TCaseContext>({
  isLoading: false,

  currentSentimentIdx: 0,
  handleSentimentChanges: noop,

  currentAnnotationIdx: 0,
  handleAnnotationChanges: noop,
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
