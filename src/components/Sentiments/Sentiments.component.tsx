import React, { useCallback } from 'react';

import { FancyLoader } from '@supportlogic/frontend-library';
import PlaceHolder from '../PlaceHolder/PlaceHolder.components';

import useCaseContext from '../../reactCustomHooks/useCaseContext';

import Sliders from '../Slider/Slider.component';
import { TSentiment, generateUniqKey } from '../../common';
import SentimentCard from './components/SentimentCard/SentimentCard.component';

import {
  Title,
  Scorers,
  LoaderWrapper,
  SentimentSlide,
  ScoreCardsWrapper,
  SentimentsContainer,
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
}: Props) {
  const { isLoading, handleSentimentChanges } = useCaseContext();

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
    (current = 0): void => {
      handleSentimentChanges(current);
    },
    [handleSentimentChanges],
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

  if (isLoading) {
    return (
      <LoaderWrapper>
        <FancyLoader size={30} />
      </LoaderWrapper>
    );
  }

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
