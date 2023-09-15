import React from 'react';

import { SentimentsContainer, ScoreWrapper, ScoreCardsWrapper } from './Sentiments.styles';

export const Sentiments: React.FC = () =>  {
return (
    <SentimentsContainer>
        <ScoreWrapper/>
        <ScoreCardsWrapper/>
    </SentimentsContainer>
    );
};

export default Sentiments;


