import React from 'react';

// import Tree from '../../components/Tree/Tree.component';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Sentiments from '../../components/Sentiments/Sentiments.component';
import { SentimentType } from '../../components/Sentiments/Sentiments.interface';

import { MainContainer, Content } from './MainContent.styles';

const sentiments: SentimentType[] = [
    {
        id: '123',
        text: 'Please note that our client is very unhappy with your support.  Description of problem: In a feature plugin if you open the feature.xml editor and click on the build tab the screen never redraws in the area of the build tab.',
        labels: ['Negative'],
        created_at: "2022-07-01T01:26:19+00:00"
    },
    {
        id: '124',
        text: "It appears that everyday I am dealing with a different engineer for this ticket and get told different answers, can we please escalate this and have them work with me to resolve.  This doesn't seem to be confined to a single tab, next time build was\nsomewhat fine and overview wasn't refreshing.  The plugin.xml editor\nalso had problems, closing and reopening the editor the same tabs had\nthe same problems",
        created_at: "2022-07-01T01:26:19+00:00",
        labels: [
            "Escalation Request",
            "Negative",
            "Frustration",
            "Lack of Progress"
        ],
    },
    {
        id: '125',
        labels: [
            "Escalation Request"
        ],
        text: "There is no chance we can wait on this. Can we escalate this?  Created attachment 110361\nerror log\n\nStack trace that was generated when I tried to open the plugin.xml after\nclosing (I'm assuming it's related...)",
        created_at: "2022-07-01T01:26:19+00:00"
    }
];

type Props = {};

export const MainContent: React.FC<Props> = () =>  {

return (
    <MainContainer>
        <Header/>
        <Content>
            <Sentiments sentimentScore={35} attentionScore={50} sentiments={sentiments} />
        </Content>
        <Footer annotations={sentiments} />
    </MainContainer>
    );
};


