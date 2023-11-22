import React, { useMemo, useState } from 'react';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useErrorBoundary } from 'react-error-boundary';

import { CaseContext } from '../../reactCustomHooks/useCaseContext';
import {
  useSearchParamsObject,
  useSendMessageToParent,
  useWindowMessageListener,
} from '../../reactCustomHooks';

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Sentiments from '../../components/Sentiments/Sentiments.component';

import {
  TData,
  TMethodName,
  TSalesforceData,
  getTransformSFPayload,
  getCaseBasedDetails,
  TAnnotation,
  waitResolve,
  sfDefaultValue,
  TCaseBasedSLData,
} from '../../common';

import { MainContainer, Content } from './MainContent.styles';
import { GET_SESSION_DETAILS } from '../../common/constants';

export function MainContent() {
  const [currentCommentIdx, setCurrentCommentIdx] = useState(0);
  const [hasError] = useState(false);
  const { showBoundary } = useErrorBoundary();

  const searchParams = useSearchParamsObject<TSalesforceData>(
    Object.keys(sfDefaultValue),
  );

  // eslint-disable-next-line no-console
  console.log('================ id: ', searchParams);

  // initiating Custom hooks
  // Initiating the window message listener hook for get data from Parent
  const { receivedData } = useWindowMessageListener<TData, TSalesforceData>();

  useSendMessageToParent<TMethodName & TData>({
    methodName: GET_SESSION_DETAILS,
    data: 'Initiate API call to SF and get date',
  });

  const salesforceData: TSalesforceData = useMemo(
    () => getTransformSFPayload({ ...receivedData, ...searchParams }),
    [receivedData, searchParams],
  );

  const {
    isLoading: isCaseDetailsLoading,
    data: caseDetails,
  }: UseQueryResult<TCaseBasedSLData, Error> = useQuery<any, Error>(
    ['caseBasedDetails', salesforceData?.parent_id],
    () =>
      getCaseBasedDetails({ salesforceData }).catch((error: any) => {
        showBoundary(error);
        Promise.reject(error);
      }),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  // eslint-disable-next-line no-console
  console.log('============== caseDetails', caseDetails);

  // getcaseAnnotations({salesforceData,})
  // .then(() => mockAnnotations)
  const {
    isLoading: isCaseAnnotationsLoading,
    data: caseAnnotations,
  }: UseQueryResult<TAnnotation[], Error> = useQuery<any, Error>(
    ['caseAnnotations', salesforceData?.parent_id],
    () =>
      waitResolve(1200)
        .then(() => [])
        .catch((error: any) => {
          showBoundary(error);
          Promise.reject(error);
        }),
    {
      enabled: !!salesforceData?.parent_id,
    },
  );

  // getCaseCommentSegments({
  //   salesforceData,
  //   annotations: caseAnnotations,
  // })
  // .then(() => mockSegments)
  const {
    isLoading: isCaseCommentsLoading,
    data: caseComments,
  }: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['caseComments', salesforceData?.parent_id],
    () =>
      waitResolve(1300)
        .then(() => [])
        .catch((error: any) => {
          showBoundary(error);
          Promise.reject(error);
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
      isCaseDetailsLoading,
      isCaseCommentsLoading,
      isCaseAnnotationsLoading,
    }),
    [
      hasError,
      salesforceData,
      currentCommentIdx,
      isCaseDetailsLoading,
      isCaseCommentsLoading,
      isCaseAnnotationsLoading,
    ],
  );

  const scores = {
    Sentiment: caseDetails?.case_data?.sl_sentiment_score ?? 0,
    Attention: caseDetails?.case_data?.sl_need_attention_score ?? 0,
  };

  return (
    <MainContainer>
      <CaseContext.Provider value={contextValue}>
        <Header />
        <Content>
          <Sentiments scores={scores} sentiments={caseDetails?.comments} />
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
