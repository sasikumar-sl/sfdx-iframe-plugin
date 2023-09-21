import React, { useMemo, useState } from 'react';

import { CaseContext } from 'reactCustomHooks/useCaseContext'
;
// import Tree from 'components/Tree/Tree.component';
import Header from 'components/Header/Header.component';
import Footer from 'components/Footer/Footer.component';
import Sentiments from 'components/Sentiments/Sentiments.component';
import { SentimentType } from 'components/Sentiments/Sentiments.interface';

import { MainContainer, Content } from './MainContent.styles';
import MockData from './MockData';

const sentiments: SentimentType[] = MockData;

type Props = {};

export const MainContent: React.FC<Props> = () =>  {

    const [selectedSentiment, setSelectedSentiment] = useState<SentimentType | null>(sentiments?.[0] ?? null);

    const contextValue = useMemo(() => {
        return {
            selectedSentiment,
            setSelectedSentiment,
        }
    }, [selectedSentiment]);

    return (
        <MainContainer>
            <CaseContext.Provider value={contextValue}>
                <Header/>
                <Content>
                    <Sentiments sentimentScore={35} attentionScore={50} sentiments={sentiments} />
                </Content>
                <Footer />
            </CaseContext.Provider>
        </MainContainer>
        );
};


