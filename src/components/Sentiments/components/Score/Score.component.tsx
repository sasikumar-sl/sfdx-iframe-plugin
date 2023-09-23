import React from 'react';
import styled from 'styled-components';
import {
  WithTooltip,
  Score as ScoreComponent,
} from '@supportlogic/frontend-library';
import { ReactComponent as InfoIcon } from '../../../../icons/circled-information.svg';
import SentimentsScorePopover from '../../../SentimentScorePopover/SentimentScorePopover.component';
import AttentionScorePopover from '../../../AttentionScorePopover/AttentionScorePopover.component';

const ScoreWrapper = styled.div`
  display: inline-flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StyledScore = styled(ScoreComponent)`
  gap: 8px !important;
  color: #4a4a4a;
  font-family: Avenir;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  div:nth-child(2) {
  }
`;

const StyledInfoIcon = styled(InfoIcon)`
  width: 16px;
  height: 16px;
  margin-top: 3px;
`;

type ScoreType = 'Sentiment' | 'Attention';

type ScoreObject = Record<ScoreType, any>;

const popoverObject: ScoreObject = {
  Sentiment: <SentimentsScorePopover />,
  Attention: <AttentionScorePopover />,
};

type Props = {
  type: ScoreType;
  label: string;
  value: number;
};

function Score({ type, value, label }: Props): React.JSX.Element {
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
