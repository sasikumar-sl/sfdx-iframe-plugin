import React, { useId, useMemo, useState } from 'react';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useErrorBoundary } from 'react-error-boundary';

import { CaseContext } from '../../reactCustomHooks/useCaseContext';
import {
  useSendMessageToParent,
  useWindowMessageListener,
} from '../../reactCustomHooks';

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Sentiments from '../../components/Sentiments/Sentiments.component';

import {
  getCaseDetails,
  getTransformedUserCaseDetails,
  TAnnotation,
  TCaseDetails,
  TData,
  TGetUserCase,
  TMethodName,
  TUserAndCaseDetails,
} from '../../common';

import { MainContainer, Content } from './MainContent.styles';
import { GET_SESSION_DETAILS } from '../../common/constants';

const placeholderData: TCaseDetails = {
  sentimentScore: 0,
  attentionScore: 0,
  sentiments: [],
};

export function MainContent() {
  const [currentSentimentIdx, setCurrentSentimentIdx] = useState(0);
  const [currentAnnotationIdx, setCurrentAnnotationIdx] = useState(0);
  const [hasError] = useState(false);
  const collpseId = useId();
  const { showBoundary } = useErrorBoundary();

  // initiating Custom hooks
  // Initiating the window message listener hook for get data from Parent
  const { receivedData } = useWindowMessageListener<TData, TGetUserCase>();

  useSendMessageToParent<TMethodName & TData>({
    methodName: GET_SESSION_DETAILS,
    data: 'Initiate API call to SF and get date',
  });

  const userAndCaseDetails: TUserAndCaseDetails = useMemo(
    () => getTransformedUserCaseDetails(receivedData),
    [receivedData],
  );

  const { isLoading, data }: UseQueryResult<TCaseDetails, Error> = useQuery<
    TCaseDetails,
    Error
  >(['case'], () =>
    getCaseDetails({ limit: 5 })
      .then((response: any) => {
        if (!response.ok) {
          showBoundary(`HTTP error! Status: ${response.status}`);
          return {};
        }
        return response.json();
      })
      .then((response: { data: TCaseDetails; message: string }) => {
        const { sentiments, ...rest } = response?.data ?? {};
        return {
          ...rest,
          sentiments: (sentiments ?? []).slice(0, 5),
        } as TCaseDetails;
      }),
  );

  const { sentimentScore, attentionScore, sentiments }: TCaseDetails =
    data ?? placeholderData;

  console.log('================= getCaseDetails: ', data, isLoading);

  const annotations: TAnnotation[] = useMemo(
    () => sentiments?.[currentSentimentIdx]?.annotations ?? [],
    [sentiments, currentSentimentIdx],
  );

  const collapsibleId = useMemo(
    () => sentiments[currentSentimentIdx ?? 0]?.id,
    [sentiments, currentSentimentIdx],
  );

  const contextValue = useMemo(
    () => ({
      hasError,
      isLoading,
      userAndCaseDetails,
      currentSentimentIdx,
      setCurrentSentimentIdx,
      currentAnnotationIdx,
      setCurrentAnnotationIdx,
    }),
    [
      hasError,
      isLoading,
      userAndCaseDetails,
      currentSentimentIdx,
      currentAnnotationIdx,
    ],
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
          collapsibleId={collapsibleId ?? collpseId}
        />
      </CaseContext.Provider>
    </MainContainer>
  );
}
