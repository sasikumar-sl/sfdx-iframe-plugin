import React, { useMemo, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { CaseContext } from '../../reactCustomHooks/useCaseContext';

// import Tree from 'components/Tree/Tree.component';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Sentiments from '../../components/Sentiments/Sentiments.component';

import { MainContainer, Content } from './MainContent.styles';
import { TAnnotation, TCase } from '../../common';

import CaseMockData from './MockData';

function wait(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

const placeholderData: TCase = {
  sentimentScore: 0,
  attentionScore: 0,
  sentiments: [],
};

export function MainContent() {
  const { isLoading, data }: UseQueryResult<TCase, Error> = useQuery<
    TCase,
    Error
  >(['case'], () => wait(1000).then(() => CaseMockData), {
    placeholderData,
  });

  const [currentSentimentIdx, setCurrentSentimentIdx] = useState(0);
  const [currentAnnotationIdx, setCurrentAnnotationIdx] = useState(0);

  const contextValue = useMemo(
    () => ({
      isLoading,

      currentSentimentIdx,
      setCurrentSentimentIdx,

      currentAnnotationIdx,
      setCurrentAnnotationIdx,
    }),
    [isLoading, currentSentimentIdx, currentAnnotationIdx],
  );

  const { sentimentScore, attentionScore, sentiments }: TCase =
    data ?? placeholderData;
  const annotations: TAnnotation[] = useMemo(
    () => sentiments?.[currentSentimentIdx]?.annotations ?? [],
    [sentiments, currentSentimentIdx],
  );

  return (
    <MainContainer>
      <CaseContext.Provider value={contextValue}>
        <Header />
        <Content>
          <Sentiments
            sentimentScore={sentimentScore}
            attentionScore={attentionScore}
            sentiments={sentiments ?? []}
          />
        </Content>
        <Footer annotations={annotations} />
      </CaseContext.Provider>
    </MainContainer>
  );
}
