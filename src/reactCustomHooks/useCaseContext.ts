import { useContext, createContext, Dispatch, SetStateAction } from 'react';
import noop from 'lodash/noop';

export type TCaseContext = {
  isLoading: boolean;
  currentSentimentIdx: number;
  setCurrentSentimentIdx: Dispatch<SetStateAction<number>>;

  currentAnnotationIdx: number;
  setCurrentAnnotationIdx: Dispatch<SetStateAction<number>>;
}

export const CaseContext = createContext<TCaseContext>({
  isLoading: false,

  currentSentimentIdx: 0,
  setCurrentSentimentIdx: noop,

  currentAnnotationIdx: 0,
  setCurrentAnnotationIdx: noop,
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
