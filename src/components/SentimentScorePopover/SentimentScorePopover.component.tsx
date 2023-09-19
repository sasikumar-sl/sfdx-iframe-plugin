import React from 'react';

import {
  RangeWrapper,
  RangeBall,
  LinkingLine,
  Label,
  ScaleWrapper,
} from './SentimentScorePopover.styles';

type SentimentScoreRangeType = {
  min: number;
  max?: number;
  title: string;
  background: string;
  color?: string;
};

const ranges: SentimentScoreRangeType[] = [
  {
    min: 0,
    max: 30,
    title: 'Very Negative',
    background: '#DA3653',
  },
  {
    min: 31,
    max: 54,
    title: '',
    background: '#EF9F06',
  },
  {
    min: 55,
    max: 64,
    title: '',
    background: '#FFDB83',
    color: '#7F5614',
  },
  {
    min: 65,
    max: 74,
    title: 'Neutral',
    background: '#E2E2E2',
    color: '#4A4A4A',
  },
  {
    min: 75,
    max: 83,
    title: '',
    background: '#CFE6C7',
    color: '#336A0A',
  },
  {
    min: 84,
    max: 92,
    title: '',
    background: '#70B37F',
  },
  {
    min: 93,
    title: 'Very Positive',
    background: '#166983',
  },
];

type Props  = {
  score?: number;
};

const SentimentsScorePopover: React.FC<Props> = () => {
  return (
    <ScaleWrapper>
      {ranges.map((range, index) => (
        <div key={range.title}>
          <RangeWrapper>
            <RangeBall
              background={range.background}
              color={range.color}
            >
              <span>{range.min}</span>
              {range?.max ? <span>-{range.max}</span> : <span>+</span>}
            </RangeBall>
            {ranges[index + 1] && (
              <LinkingLine from={range.background} to={ranges[index + 1].background} />
            )}
          </RangeWrapper>
          <Label>
            {range.title}
          </Label>
        </div>
      ))}
    </ScaleWrapper>
  );
};

export default SentimentsScorePopover;