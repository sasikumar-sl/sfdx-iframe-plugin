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
  sfDefaultValue,
  TCaseBasedSLData,
  TCommentData,
} from '../../common';

import { MainContainer, Content } from './MainContent.styles';
import { GET_SESSION_DETAILS } from '../../common/constants';

export function MainContent() {
  const [currentAnnotationIdx, setCurrentAnnotationIdx] = useState(0);
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

  const contextValue = useMemo(
    () => ({
      hasError,
      salesforceData,
      currentAnnotationIdx,
      setCurrentAnnotationIdx,
      isCaseDetailsLoading,
    }),
    [hasError, salesforceData, currentAnnotationIdx, isCaseDetailsLoading],
  );

  const {
    caseScores,
    caseSentiments,
    caseAnnotations,
  }: {
    caseScores: any;
    caseSentiments: TCommentData[] | undefined;
    caseAnnotations: TAnnotation[] | undefined;
  } = useMemo(() => {
    const scores = {
      Sentiment: caseDetails?.case_data?.sl_sentiment_score ?? 0,
      Attention: caseDetails?.case_data?.sl_need_attention_score ?? 0,
    };

    const sentiments =
      caseDetails?.comments?.slice(0, 5) ?? caseDetails?.comments;

    const annotations = caseDetails?.notes?.slice(0, 5) ?? caseDetails?.notes;

    return {
      caseScores: scores,
      caseSentiments: sentiments,
      caseAnnotations: annotations,
    };
  }, [caseDetails]);

  return (
    <MainContainer>
      <CaseContext.Provider value={contextValue}>
        <Header />
        <Content>
          <Sentiments scores={caseScores} sentiments={caseSentiments} />
        </Content>
        <Footer isOpen caseAnnotations={caseAnnotations} />
      </CaseContext.Provider>
    </MainContainer>
  );
}
