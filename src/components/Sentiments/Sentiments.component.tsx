import React, { useMemo } from 'react';
import { WithTooltip } from '@supportlogic/frontend-library';

import SentimentsScorePopover from '../SentimentScorePopover/SentimentScorePopover.component';
import AttentionScorePopover from '../AttentionScorePopover/AttentionScorePopover.component';
import PlaceHolder from '../PlaceHolder/PlaceHolder.components';

import {
    SentimentsContainer,
    Scorers,
    ScoreWrapper,
    ScoreCardsWrapper,
    StyledInfoIcon,
    StyledScore,
    Card,
} from './Sentiments.styles';

export type SentimentType = {
    id: string;
    description: string; 
};

type Props = {
    sentimentScore: number;
    attentionScore: number;
    sentiments?: SentimentType[]
};

export const Sentiments: React.FC<Props> = ({ sentimentScore, attentionScore, sentiments = [] }) =>  {
   
    const Sentiment = useMemo(() => {
        if(!sentiments.length) {
            return <PlaceHolder/>
        }

        return <Card/>;
    }, [sentiments]);
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
        <ScoreCardsWrapper>
            {Sentiment}
        </ScoreCardsWrapper>
    </SentimentsContainer>
    );
};

export default Sentiments;


