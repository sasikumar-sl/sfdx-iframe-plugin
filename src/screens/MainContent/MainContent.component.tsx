import React, { useMemo, useState } from 'react';

import { CaseContext } from '../../reactCustomHooks/useCaseContext';

// import Tree from 'components/Tree/Tree.component';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Sentiments from '../../components/Sentiments/Sentiments.component';
import { SentimentType } from '../../components/Sentiments/Sentiments.interface';
import { AnnotationType } from '../../components/AnnotationCard/Annotation.interface';

import { MainContainer, Content } from './MainContent.styles';
import MockData from './MockData';

const sentiments: SentimentType[] = MockData;

export function MainContent(): React.JSX.Element {
  const sentiment: SentimentType = sentiments?.[0];

  const [selectedSentiment, setSelectedSentiment] =
    useState<SentimentType | null>(sentiment ?? null);
  const [selectedAnnotation, setSelectedAnnotation] =
    useState<AnnotationType | null>(sentiment.annotations?.[0] ?? null);

  const contextValue = useMemo(
    () => ({
      selectedSentiment,
      setSelectedSentiment,

      selectedAnnotation,
      setSelectedAnnotation,
    }),
    [selectedSentiment, selectedAnnotation],
  );

  return (
    <MainContainer>
      <CaseContext.Provider value={contextValue}>
        <Header />
        <Content>
          <Sentiments
            sentimentScore={35}
            attentionScore={50}
            sentiments={sentiments}
          />
        </Content>
        <Footer />
      </CaseContext.Provider>
    </MainContainer>
  );
}
