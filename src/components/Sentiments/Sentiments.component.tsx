import React from 'react';
import { WithTooltip } from '@supportlogic/frontend-library';

import SentimentsScorePopover from '../SentimentScorePopover/SentimentScorePopover.component';
import AttentionScorePopover from '../AttentionScorePopover/AttentionScorePopover.component';

import {
    SentimentsContainer,
    Scorers,
    ScoreWrapper,
    ScoreCardsWrapper,
    StyledInfoIcon,
    StyledScore
} from './Sentiments.styles';

type Props = {
    sentimentScore: number;
    attentionScore: number;
};

export const Sentiments: React.FC<Props> = ({ sentimentScore, attentionScore }) =>  {
return (
    <SentimentsContainer>
        <Scorers>
            <ScoreWrapper>
                <StyledScore  type="Sentiment"  label="Attention Score" value={sentimentScore}/>
                <WithTooltip 
                    placement="bottom"
                    content={<SentimentsScorePopover/>}
                    backgroundColor="white"
                    textColor="black"
                >
                    <StyledInfoIcon/>
                </WithTooltip>
            </ScoreWrapper>
            <ScoreWrapper>
                <StyledScore  type="Attention" label="Attention Score" value={attentionScore} />
                <WithTooltip 
                    placement="bottom"
                    content={<AttentionScorePopover/>}
                    backgroundColor="white"
                    textColor="black"
                >
                    <StyledInfoIcon/>
                </WithTooltip>
            </ScoreWrapper>
        </Scorers>
        <ScoreCardsWrapper/>
    </SentimentsContainer>
    );
};

export default Sentiments;


