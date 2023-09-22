import React from 'react';
import {
  RangeWrapper,
  RangeBall,
  LinkingLine,
  Label,
  ScaleWrapper,
} from './AttentionScorePopover.styles';

type AttentionScoreRangeType = {
  min: number;
  max?: number;
  title: string;
  background: string;
};

const ranges: AttentionScoreRangeType[] = [
  {
    min: 0,
    max: 39,
    title: 'Least Critical',
    background: '#458FF9',
  },
  {
    min: 40,
    max: 49,
    title: '',
    background: '#7A74F4',
  },
  {
    min: 50,
    max: 59,
    title: '',
    background: '#AB72DF',
  },
  {
    min: 60,
    max: 69,
    title: '',
    background: '#BC5DCD',
  },
  {
    min: 70,
    max: 79,
    title: '',
    background: '#D776C3',
  },
  {
    min: 80,
    max: 89,
    title: '',
    background: '#EF8EBD',
  },
  {
    min: 90,
    title: 'Very Critical',
    background: '#FD8DD6',
  },
];

function AttentionScorePopover(): JSX.Element {
  return (
    <ScaleWrapper>
      {ranges.map((range, index) => (
        <div key={range.title}>
          <RangeWrapper>
            <RangeBall background={range.background}>
              <span>{range.min}</span>
              {range?.max ? <span>-{range.max}</span> : <span>+</span>}
            </RangeBall>
            {ranges[index + 1] && (
              <LinkingLine
                from={range.background}
                to={ranges[index + 1].background}
              />
            )}
          </RangeWrapper>
          <Label> {range.title}</Label>
        </div>
      ))}
    </ScaleWrapper>
  );
}

export default AttentionScorePopover;
