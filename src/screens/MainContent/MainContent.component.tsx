import React from 'react';

// import Tree from '../../components/Tree/Tree.component';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Sentiments from '../../components/Sentiments/Sentiments.component';

import { MainContainer, Content } from './MainContent.styles';

type Props = {};

export const MainContent: React.FC<Props> = () =>  {
return (
    <MainContainer>
        <Header/>
        <Content>
            <Sentiments sentimentScore={35} attentionScore={50} />
        </Content>
        <Footer />
    </MainContainer>
    );
};


