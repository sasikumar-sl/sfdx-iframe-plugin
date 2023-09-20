import React, { useRef } from 'react';
import { WithTooltip } from '@supportlogic/frontend-library';

import SentimentsScorePopover from '../SentimentScorePopover/SentimentScorePopover.component';
import AttentionScorePopover from '../AttentionScorePopover/AttentionScorePopover.component';
import PlaceHolder from '../PlaceHolder/PlaceHolder.components';

import Sliders from '../Slider/Slider.component';
import { generateUniqKey } from '../../common';
import SentimentCard from './components/SentimentCard/SentimentCard.component';

import {
    SentimentsContainer,
    Scorers,
    ScoreWrapper,
    ScoreCardsWrapper,
    StyledInfoIcon,
    StyledScore,
    Slide,
    Title,
} from './Sentiments.styles';
import { SentimentType } from './Sentiments.interface';

const tooltipStyles = { width: 'auto', maxWidth: 'calc(75% - 40px)' };

type Props = {
    sentimentScore: number;
    attentionScore: number;
    sentiments?: SentimentType[]
};

export const Sentiments: React.FC<Props> = ({ sentimentScore, attentionScore, sentiments = [] }) =>  {
    
    const sliderSettings = useRef({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        className: 'sentiments-slider'
    });

    const renderer = (sentiment: SentimentType) => (
        <Slide className='sentiments-slide-wrapper' key={sentiment?.id ?? generateUniqKey()}>
           <SentimentCard sentiment={sentiment} tooltipStyles={tooltipStyles} />
        </Slide>
    );

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
            {
                sentiments.length
                ? (
                    <>
                        <Title>Sentiments Detected</Title>
                        <Sliders
                            sentiments={sentiments}
                            sliderSettings={sliderSettings?.current}
                            renderer={renderer}
                            showPagination
                        />
                    </>
                )
                : <PlaceHolder/>
            }
        </ScoreCardsWrapper>
    </SentimentsContainer>
    );
};

export default Sentiments;


