import React from 'react';

import PlaceHolder from '../PlaceHolder/PlaceHolder.components';

import useCaseContext from '../../reactCustomHooks/useCaseContext';

import Sliders from '../Slider/Slider.component';
import { TSentiment, generateUniqKey } from '../../common';

import SentimentLoader from './components/Sentiment/SentimentLoader.component';
import Sentiment from './components/Sentiment/Sentiment.component';
import Score, { ScoreSkeleton } from './components/Score/Score.component';

import { TScore } from './components/Score/Score.types';

import {
  Title,
  Scorers,
  SentimentSlide,
  ScoreCardsWrapper,
  SentimentsContainer,
} from './Sentiments.styles';

const tooltipStyles = { width: 'auto', maxWidth: 'calc(75% - 40px)' };

type Props = {
  scores: { [key in TScore]: number };
  sentiments?: TSentiment[];
};

function Sentiments({
  scores = {
    Sentiment: 0,
    Attention: 0,
  },
  sentiments = [],
}: Props) {
  const { isCaseScoresLoading, isCaseSentimentsLoading } = useCaseContext();

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

  const renderer = (sentiment: TSentiment, index: number) => (
    <SentimentSlide
      className="sentiment-slide-wrapper"
      key={sentiment?.sl_comment_id ?? generateUniqKey()}
    >
      <Sentiment
        sentiment={sentiment}
        tooltipStyles={tooltipStyles}
        isBlured={index > 2}
      />
    </SentimentSlide>
  );

  const condSentiments = sentiments.length ? (
    <>
      <Title>Sentiments Detected</Title>
      <Sliders
        id="sliders-wrapper-sentiments"
        height={125}
        showPagination
        items={sentiments}
        renderer={renderer}
        sliderSettings={sliderSettings}
      />
    </>
  ) : (
    <PlaceHolder />
  );

  return (
    <SentimentsContainer>
      <Scorers>
        {Object.keys(scores).map((type) =>
          isCaseScoresLoading ? (
            <ScoreSkeleton key={type} />
          ) : (
            <Score
              key={type}
              type={type as TScore}
              label={`${type} Score`}
              value={scores?.[type as TScore]}
            />
          ),
        )}
      </Scorers>

      <ScoreCardsWrapper>
        {isCaseSentimentsLoading ? <SentimentLoader /> : condSentiments}
      </ScoreCardsWrapper>
    </SentimentsContainer>
  );
}

export default Sentiments;
