import React, { useCallback } from 'react';

import PlaceHolder from '../PlaceHolder/PlaceHolder.components';

import { TSentiment } from './Sentiments.types';
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
  sentiments?: TSentiment[];
};

function Sentiments({
  sentimentScore,
  attentionScore,
  sentiments = [],
}: Props): React.JSX.Element {
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
  };

  const onHandleSliderChange = useCallback(
    (current: number): void => {
      setSelectedSentiment(sentiments[current] ?? 0);
    },
    [sentiments, setSelectedSentiment],
  );

  const renderer = (sentiment: TSentiment, index: number) => (
    <SentimentSlide
      className="sentiment-slide-wrapper"
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
          type="Sentiment"
          label="Sentiment Score"
          value={sentimentScore}
        />
        <Score
          type="Attention"
          label="Attention Score"
          value={attentionScore}
        />
      </Scorers>
      <ScoreCardsWrapper>
        {sentiments.length ? (
          <>
            <Title>Sentiments Detected</Title>
            <Sliders
              height={125}
              showPagination
              items={sentiments}
              renderer={renderer}
              sliderSettings={sliderSettings}
              onAfterChange={onHandleSliderChange}
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
