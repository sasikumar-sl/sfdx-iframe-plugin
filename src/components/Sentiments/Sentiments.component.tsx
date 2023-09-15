import React from 'react';

import {
    SentimentsContainer,
    Scorers,
    ScoreWrapper,
    ScoreCardsWrapper,
    StyledInfoIcon,
    StyledScore
} from './Sentiments.styles';

export const Sentiments: React.FC = () =>  {
return (
    <SentimentsContainer>
        <Scorers>
            <ScoreWrapper>
                <StyledScore  type="Sentiment" value={35} showTooltip/>
                <StyledInfoIcon/>
            </ScoreWrapper>
            <ScoreWrapper>
                <StyledScore  type="Attention" label="Attention Score" value={50} />
                <StyledInfoIcon/>
            </ScoreWrapper>
        </Scorers>
        <ScoreCardsWrapper/>
    </SentimentsContainer>
    );
};

export default Sentiments;


