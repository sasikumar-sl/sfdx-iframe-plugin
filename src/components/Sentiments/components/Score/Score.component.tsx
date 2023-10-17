import React from 'react';
import { WithTooltip } from '@supportlogic/frontend-library';
import SentimentsScorePopover from '../../../SentimentScorePopover/SentimentScorePopover.component';
import AttentionScorePopover from '../../../AttentionScorePopover/AttentionScorePopover.component';
import { TScoreObject, TScore } from './Score.types';

import {
  ScoreWrapper,
  StyledScore,
  StyledInfoIcon,
  SkeletonScore,
  SkeletonName,
  SkeletonIcon,
} from './Score.styles';

const popoverObject: TScoreObject = {
  Sentiment: <SentimentsScorePopover />,
  Attention: <AttentionScorePopover />,
};

export function ScoreSkeleton() {
  return (
    <ScoreWrapper>
      <SkeletonScore />
      <SkeletonName />
      <SkeletonIcon />
    </ScoreWrapper>
  );
}

type Props = {
  type: TScore;
  label: string;
  value: number;
};

function Score({ type, value, label }: Props) {
  return (
    <ScoreWrapper>
      <StyledScore type={type} label={label} value={value} />
      <WithTooltip
        zIndex={9999}
        placement="bottom"
        textColor="black"
        backgroundColor="white"
        content={popoverObject[type]}
      >
        <StyledInfoIcon />
      </WithTooltip>
    </ScoreWrapper>
  );
}

export default Score;
