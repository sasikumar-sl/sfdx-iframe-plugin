import { useContext, createContext, Dispatch, SetStateAction } from 'react';
import noop from 'lodash/noop';
import { TAnnotation } from 'components/AnnotationCard/Annotation.types';
import { TSentiment } from 'components/Sentiments/Sentiments.types';

export interface ICaseContext {
  selectedSentiment: TSentiment | null;
  setSelectedSentiment: Dispatch<SetStateAction<TSentiment | null>>;
  selectedAnnotation: TAnnotation | null;
  setSelectedAnnotation: Dispatch<SetStateAction<TAnnotation | null>>;
}

export const CaseContext = createContext<ICaseContext>({
  selectedSentiment: null,
  setSelectedSentiment: noop,

  selectedAnnotation: null,
  setSelectedAnnotation: noop,
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
