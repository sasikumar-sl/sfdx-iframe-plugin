import React from 'react';
import { WithTooltip } from '@supportlogic/frontend-library';

import SentimentsScorePopover from '../SentimentScorePopover/SentimentScorePopover.component';
import AttentionScorePopover from '../AttentionScorePopover/AttentionScorePopover.component';
import PlaceHolder from '../PlaceHolder/PlaceHolder.components';

import { SentimentType } from './Sentiments.interface';
import useCaseContext from 'reactCustomHooks/useCaseContext';

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

const tooltipStyles = { width: 'auto', maxWidth: 'calc(75% - 40px)' };

type TooltipProps = {
    icon: React.ReactNode;
    content: React.ReactNode;
};

const Tooltip:React.FC<TooltipProps> = ({ icon, content }) => (
    <WithTooltip 
        zIndex={9999}
        placement="bottom"
        textColor="black"
        backgroundColor="white"
        content={content}
    >
        {icon}
    </WithTooltip>
);

type Props = {
    sentimentScore: number;
    attentionScore: number;
    sentiments?: SentimentType[]
};

export const Sentiments: React.FC<Props> = ({ sentimentScore, attentionScore, sentiments = [] }) =>  {

    const { setSelectedSentiment } = useCaseContext();

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        className: 'sentiments-slider',
        beforeChange: (old: number, index: number) => setSelectedSentiment(sentiments[index] ?? 1),
    };

    const renderer = (sentiment: SentimentType, index: number) => (
        <Slide className='sentiments-slide-wrapper' key={sentiment?.id ?? generateUniqKey()}>
           <SentimentCard sentiment={sentiment} tooltipStyles={tooltipStyles} isBlured={index > 2} />
        </Slide>
    );

    return (
    <SentimentsContainer>
        <Scorers>
            <ScoreWrapper>
                <StyledScore  type="Sentiment"  label="Attention Score" value={sentimentScore}/>
                <Tooltip icon={<StyledInfoIcon/>} content={<SentimentsScorePopover/>}/>
            </ScoreWrapper>
            <ScoreWrapper>
                <StyledScore  type="Attention" label="Attention Score" value={attentionScore} />
                <Tooltip icon={<StyledInfoIcon/>} content={<AttentionScorePopover/>}/>
            </ScoreWrapper>
        </Scorers>
        <ScoreCardsWrapper>
            {
                sentiments.length
                ? (
                    <>
                        <Title>Sentiments Detected</Title>
                        <Sliders
                            height={125}
                            items={sentiments}
                            sliderSettings={sliderSettings}
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


