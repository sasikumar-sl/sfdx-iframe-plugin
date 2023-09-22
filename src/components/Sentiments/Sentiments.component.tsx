import React from 'react';

import PlaceHolder from '../PlaceHolder/PlaceHolder.components';

import { SentimentType } from './Sentiments.interface';
import useCaseContext from '../../reactCustomHooks/useCaseContext';

import Sliders from '../Slider/Slider.component';
import { generateUniqKey } from '../../common';
import SentimentCard from './components/SentimentCard/SentimentCard.component';

import {
  SentimentsContainer,
  Scorers,
  ScoreCardsWrapper,
  SentimentSlide,
  Title,
} from './Sentiments.styles';
import Score from './components/Score/Score.component';

const tooltipStyles = { width: 'auto', maxWidth: 'calc(75% - 40px)' };

type Props = {
  sentimentScore: number;
  attentionScore: number;
  sentiments?: SentimentType[];
};

function Sentiments({
  sentimentScore,
  attentionScore,
  sentiments = [],
}: Props): JSX.Element {
  const { setSelectedSentiment } = useCaseContext();

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    className: 'sentiment-slider',
    beforeChange: (_old: number, index: number) =>
      setSelectedSentiment(sentiments[index] ?? 1),
  };

  const renderer = (sentiment: SentimentType, index: number) => (
    <SentimentSlide
      className='sentiment-slide-wrapper'
      key={sentiment?.id ?? generateUniqKey()}
    >
      <SentimentCard
        sentiment={sentiment}
        tooltipStyles={tooltipStyles}
        isBlured={index > 2}
      />
    </SentimentSlide>
  );

  return (
    <SentimentsContainer>
      <Scorers>
        <Score
          type='Sentiment'
          label='Sentiment Score'
          value={sentimentScore}
        />
        <Score
          type='Attention'
          label='Attention Score'
          value={attentionScore}
        />
      </Scorers>
      <ScoreCardsWrapper>
        {sentiments.length ? (
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
        ) : (
          <PlaceHolder />
        )}
      </ScoreCardsWrapper>
    </SentimentsContainer>
  );
}

export default Sentiments;
