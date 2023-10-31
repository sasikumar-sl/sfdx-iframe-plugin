import React, { useMemo, useState } from 'react';

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
  TData,
  TScores,
  TMethodName,
  TSalesforceData,
  getCaseScores,
  getCaseSentiments,
  getCaseCommentSegments,
  getTransformSFPayload,
  getcaseAnnotations,
  TAnnotation,
} from '../../common';

import { MainContainer, Content } from './MainContent.styles';
import { GET_SESSION_DETAILS } from '../../common/constants';

export function MainContent() {
  const [currentCommentIdx, setCurrentCommentIdx] = useState(0);
  const [hasError] = useState(false);
  const { showBoundary } = useErrorBoundary();

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

  const {
    isLoading: isCaseScoresLoading,
    data: caseScores,
  }: UseQueryResult<TScores, Error> = useQuery<TScores, Error>(
    ['caseScores', salesforceData?.parent_id],
    () =>
      getCaseScores({ salesforceData }).catch((error: any) => {
        showBoundary(error);
        return Promise.reject(error);
      }),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  const {
    isLoading: isCaseSentimentsLoading,
    data: caseSentiments,
  }: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['caseSentiments', salesforceData?.parent_id],
    () =>
      getCaseSentiments({ salesforceData }).catch((error: any) => {
        showBoundary(error);
        return Promise.reject(error);
      }),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  const {
    isLoading: isCaseAnnotationsLoading,
    data: caseAnnotations,
  }: UseQueryResult<TAnnotation[], Error> = useQuery<any, Error>(
    ['caseAnnotations', salesforceData?.parent_id],
    () =>
      getcaseAnnotations({
        salesforceData,
      }).catch((error: any) => {
        showBoundary(error);
        return Promise.reject(error);
      }),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  const {
    isLoading: isCaseCommentsLoading,
    data: caseComments,
  }: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['caseComments', salesforceData?.parent_id],
    () =>
      getCaseCommentSegments({
        salesforceData,
        annotations: caseAnnotations,
      }).catch((error: any) => {
        showBoundary(error);
        return Promise.reject(error);
      }),
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
