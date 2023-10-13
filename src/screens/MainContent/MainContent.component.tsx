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
  TGetUserCase,
  getCaseScores,
  getCaseSentiments,
  TUserAndCaseDetails,
  getCaseCommentSegments,
  getTransformedUserCaseDetails,
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
  const { receivedData } = useWindowMessageListener<TData, TGetUserCase>();

  useSendMessageToParent<TMethodName & TData>({
    methodName: GET_SESSION_DETAILS,
    data: 'Initiate API call to SF and get date',
  });

  const userAndCaseDetails: TUserAndCaseDetails = useMemo(
    () => getTransformedUserCaseDetails(receivedData),
    [receivedData],
  );

  // const { isLoading, data }: UseQueryResult<TCaseDetails, Error> = useQuery<
  //   TCaseDetails,
  //   Error
  // >(
  //   ['case'],
  //   () =>
  //     getCaseDetails({ limit: 5 })
  //       .then((response: TCaseDetails) => {
  //         const { sentiments } = response ?? {};
  //         return {
  //           sentiments: (sentiments ?? []).slice(0, 5),
  //         } as TCaseDetails;
  //       })
  //       .catch((error: any) => {
  //         showBoundary(error);
  //         return Promise.reject(error);
  //       }),
  //   {
  //     enabled: !!userAndCaseDetails?.caseId,
  //   },
  // );

  const {
    isLoading: isCaseScoresLoading,
    data: caseScoreData,
  }: UseQueryResult<TScores, Error> = useQuery<TScores, Error>(
    ['caseScores', userAndCaseDetails?.caseId],
    () =>
      getCaseScores({ sl_ticket_id: userAndCaseDetails?.caseId }).catch(
        (error: any) => {
          showBoundary(error);
          return Promise.reject(error);
        },
      ),
    {
      enabled: !!userAndCaseDetails?.caseId,
    },
  );

  const {
    isLoading: isCaseSentimentsLoading,
    data: caseSentiments,
  }: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['caseSentiments', userAndCaseDetails?.caseId],
    () =>
      getCaseSentiments({ sl_ticket_id: userAndCaseDetails?.caseId }).catch(
        (error: any) => {
          showBoundary(error);
          return Promise.reject(error);
        },
      ),
    {
      enabled: !!userAndCaseDetails?.caseId,
    },
  );

  const {
    isLoading: isCaseAnnotationsLoading,
    data: caseAnnotations,
  }: UseQueryResult<TAnnotation[], Error> = useQuery<any, Error>(
    ['caseAnnotations', userAndCaseDetails?.caseId],
    () =>
      getcaseAnnotations({
        sl_ticket_id: userAndCaseDetails?.caseId,
      }).catch((error: any) => {
        showBoundary(error);
        return Promise.reject(error);
      }),
    {
      enabled: !!userAndCaseDetails?.caseId,
    },
  );

  const {
    isLoading: isCaseCommentsLoading,
    data: caseComments,
  }: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['caseComments', userAndCaseDetails?.caseId],
    () =>
      getCaseCommentSegments({
        sl_ticket_id: userAndCaseDetails?.caseId,
        annotations: caseAnnotations,
      }).catch((error: any) => {
        showBoundary(error);
        return Promise.reject(error);
      }),
    {
      enabled: !!(userAndCaseDetails?.caseId && caseAnnotations?.length),
    },
  );

  // if (caseAnnotations && caseComments)
  //   // eslint-disable-next-line no-console
  //   console.log(
  //     '=========== notes: ',
  //     caseAnnotations,
  //     '   ============= comments: ',
  //     caseComments,
  //   );

  // const comments = useMemo(
  //   () => data?.sentiments?.[3]?.comments ?? [],
  //   [data?.sentiments],
  // );

  // const collapsibleId = useMemo(
  //   () => data?.sentiments[3]?.id,
  //   [data?.sentiments],
  // );

  const contextValue = useMemo(
    () => ({
      hasError,
      userAndCaseDetails,
      currentCommentIdx,
      setCurrentCommentIdx,
      isCaseScoresLoading,
      isCaseSentimentsLoading,
      isCaseCommentsLoading,
      isCaseAnnotationsLoading,
    }),
    [
      hasError,
      userAndCaseDetails,
      currentCommentIdx,
      isCaseScoresLoading,
      isCaseSentimentsLoading,
      isCaseCommentsLoading,
      isCaseAnnotationsLoading,
    ],
  );

  return (
    <MainContainer>
      <CaseContext.Provider value={contextValue}>
        <Header />
        <Content>
          <Sentiments
            sentimentScore={caseScoreData?.sl_sentiment_score ?? 0}
            attentionScore={caseScoreData?.sl_need_attention_score ?? 0}
            sentiments={caseSentiments ?? []}
          />
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
