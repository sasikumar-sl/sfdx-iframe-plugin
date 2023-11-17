import React, { useMemo, useState } from 'react';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

// eslint-disable-next-line import/no-extraneous-dependencies
// import { useErrorBoundary } from 'react-error-boundary';

import { CaseContext } from '../../reactCustomHooks/useCaseContext';
import {
  useSendMessageToParent,
  useWindowMessageListener,
} from '../../reactCustomHooks';

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Sentiments from '../../components/Sentiments/Sentiments.component';

import {
  TData,
  TScores,
  TMethodName,
  TSalesforceData,
  getTransformSFPayload,
  getCaseBasedDetails,
  TAnnotation,
  waitResolve,
} from '../../common';

import { MainContainer, Content } from './MainContent.styles';
import { GET_SESSION_DETAILS } from '../../common/constants';

import mockSentiments from './mock/sentiments';
import mockAnnotations from './mock/annotations';
import mockSegments from './mock/segmentComments';

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function MainContent() {
  const [currentCommentIdx, setCurrentCommentIdx] = useState(0);
  const [hasError] = useState(false);
  // const { showBoundary } = useErrorBoundary();

  // initiating Custom hooks
  // Initiating the window message listener hook for get data from Parent
  const { receivedData } = useWindowMessageListener<TData, TSalesforceData>();

  useSendMessageToParent<TMethodName & TData>({
    methodName: GET_SESSION_DETAILS,
    data: 'Initiate API call to SF and get date',
  });

  const salesforceData: TSalesforceData = useMemo(
    () => getTransformSFPayload(receivedData),
    [receivedData],
  );

  // getCaseBasedDetails({ salesforceData })
  const {
    isLoading: isCaseDetailsLoading,
    data: caseDetails,
  }: UseQueryResult<TScores, Error> = useQuery<TScores, Error>(
    ['caseBasedDetails', salesforceData?.parent_id],
    () =>
      getCaseBasedDetails({ salesforceData }).catch((error: any) =>
        // showBoundary(error);
        Promise.reject(error),
      ),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  // eslint-disable-next-line no-console
  console.log('============== caseDetails', caseDetails, isCaseDetailsLoading);

  // getCaseScores({ salesforceData })
  const {
    isLoading: isCaseScoresLoading,
    data: caseScores,
  }: UseQueryResult<TScores, Error> = useQuery<TScores, Error>(
    ['caseScores', salesforceData?.parent_id],
    () =>
      waitResolve()
        .then(() => ({
          sl_ticket_id: '5002E00001xkvaDQAQ',
          sl_need_attention_score: getRandomNumber(20, 80),
          sl_sentiment_score: getRandomNumber(30, 90),
        }))
        .catch((error: any) =>
          // showBoundary(error);
          Promise.reject(error),
        ),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  // getCaseSentiments({ salesforceData })
  const {
    isLoading: isCaseSentimentsLoading,
    data: caseSentiments,
  }: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['caseSentiments', salesforceData?.parent_id],
    () =>
      waitResolve(1100)
        .then(() => mockSentiments)
        .catch((error: any) =>
          // showBoundary(error);
          Promise.reject(error),
        ),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  // getcaseAnnotations({salesforceData,})
  const {
    isLoading: isCaseAnnotationsLoading,
    data: caseAnnotations,
  }: UseQueryResult<TAnnotation[], Error> = useQuery<any, Error>(
    ['caseAnnotations', salesforceData?.parent_id],
    () =>
      waitResolve(1200)
        .then(() => mockAnnotations)
        .catch((error: any) =>
          // showBoundary(error);
          Promise.reject(error),
        ),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  // getCaseCommentSegments({
  //   salesforceData,
  //   annotations: caseAnnotations,
  // })
  const {
    isLoading: isCaseCommentsLoading,
    data: caseComments,
  }: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['caseComments', salesforceData?.parent_id],
    () =>
      waitResolve(1300)
        .then(() => mockSegments)
        .catch((error: any) =>
          // showBoundary(error);
          Promise.reject(error),
        ),
    {
      enabled: !!(salesforceData?.parent_id && caseAnnotations?.length),
    },
  );

  const contextValue = useMemo(
    () => ({
      hasError,
      salesforceData,
      currentCommentIdx,
      setCurrentCommentIdx,
      isCaseScoresLoading,
      isCaseSentimentsLoading,
      isCaseCommentsLoading,
      isCaseAnnotationsLoading,
    }),
    [
      hasError,
      salesforceData,
      currentCommentIdx,
      isCaseScoresLoading,
      isCaseSentimentsLoading,
      isCaseCommentsLoading,
      isCaseAnnotationsLoading,
    ],
  );

  const scores = {
    Sentiment: caseScores?.sl_sentiment_score ?? 0,
    Attention: caseScores?.sl_need_attention_score ?? 0,
  };

  return (
    <MainContainer>
      <CaseContext.Provider value={contextValue}>
        <Header />
        <Content>
          <Sentiments scores={scores} sentiments={caseSentiments} />
        </Content>
        <Footer
          isOpen
          caseComments={caseComments}
          caseAnnotations={caseAnnotations}
        />
      </CaseContext.Provider>
    </MainContainer>
  );
}
