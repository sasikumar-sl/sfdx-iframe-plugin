import React, { useMemo, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { CaseContext } from '../../reactCustomHooks/useCaseContext';

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Sentiments from '../../components/Sentiments/Sentiments.component';

import { MainContainer, Content } from './MainContent.styles';
import { TAnnotation, TCaseDetails, wait } from '../../common';

import CaseMockData from './MockData';
import { useUserCaseDetailsContext } from '../../reactCustomHooks';

const placeholderData: TCaseDetails = {
  sentimentScore: 0,
  attentionScore: 0,
  sentiments: [],
};

export function MainContent() {
  const userCaseDetails = useUserCaseDetailsContext();

  const { isLoading, data }: UseQueryResult<TCaseDetails, Error> = useQuery<
    TCaseDetails,
    Error
  >(['case'], () => wait(1000).then(() => CaseMockData));

  const [currentSentimentIdx, setCurrentSentimentIdx] = useState(0);
  const [currentAnnotationIdx, setCurrentAnnotationIdx] = useState(0);

  const handleSentimentChanges = (idx: number) => {
    setCurrentSentimentIdx(idx);
  };
  const handleAnnotationChanges = (idx: number) => {
    setCurrentAnnotationIdx(idx);
  };

  const contextValue = useMemo(
    () => ({
      isLoading,

      currentSentimentIdx,
      handleSentimentChanges,

      currentAnnotationIdx,
      handleAnnotationChanges,
    }),
    [isLoading, currentSentimentIdx, currentAnnotationIdx],
  );

  const { sentimentScore, attentionScore, sentiments }: TCaseDetails =
    data ?? placeholderData;

  const annotations: TAnnotation[] = useMemo(
    () => sentiments?.[currentSentimentIdx]?.annotations ?? [],
    [sentiments, currentSentimentIdx],
  );

  const collapsibleId = useMemo(
    () => sentiments[currentSentimentIdx ?? 0]?.id,
    [sentiments, currentSentimentIdx],
  );

  // eslint-disable-next-line no-console
  console.log(
    '################# Plugin APP Main userCaseDetails: ',
    userCaseDetails,
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
        <Footer
          isOpen
          annotations={annotations}
          collapsibleId={collapsibleId}
        />
      </CaseContext.Provider>
    </MainContainer>
  );
}
