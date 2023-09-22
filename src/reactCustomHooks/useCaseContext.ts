import { useContext, createContext, Dispatch, SetStateAction } from 'react';
import noop from 'lodash/noop';
import { SentimentType } from '../components/Sentiments/Sentiments.interface';

export interface ICaseContext {
  selectedSentiment: SentimentType | null;
  setSelectedSentiment: Dispatch<SetStateAction<SentimentType | null>>;
}

export const CaseContext = createContext<ICaseContext>({
  selectedSentiment: null,
  setSelectedSentiment: noop,
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
