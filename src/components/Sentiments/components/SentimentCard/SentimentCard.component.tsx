import React, { CSSProperties, useMemo } from 'react';
import { formatDistance } from 'date-fns';

import { SignalLabel, WithTooltip } from '@supportlogic/frontend-library';

import {
  getSignalLabelStyles,
  formatLabels,
} from '../../../../common/helpers/sentiments/sentimentsHelper';

import {
  Card,
  Wrapper,
  SignalText,
  BluredTitle,
  SignalLabels,
  BluredWrapper,
  SignalFooterText,
  SignalTextContainer,
} from './SentimentCard.styles';
import { TSentimentNew } from '../../../../common';

type Props = {
  isBlured: boolean;
  sentiment: TSentimentNew;
  tooltipStyles?: CSSProperties;
};

function SentimentCard({ sentiment, tooltipStyles, isBlured }: Props) {
  const labels = formatLabels(Object.keys(sentiment.sl_span_counts));
  const timestamp = new Date(sentiment.sl_created_at).getTime();

  const Blured = useMemo(() => {
    if (!isBlured) return null;
    return (
      <BluredWrapper>
        <BluredTitle>
          Visit{' '}
          <a
            href="https://www.supportlogic.com/"
            target="_blank"
            rel="noreferrer"
          >
            SupportLogic
          </a>{' '}
          to view more sentiments{' '}
        </BluredTitle>
      </BluredWrapper>
    );
  }, [isBlured]);

  return (
    <Card>
      {Blured}
      <Wrapper>
        <SignalLabels>
          {labels.map((label, index) => (
            <SignalLabel
              key={label?.text ?? index}
              label={label.text}
              getStyles={getSignalLabelStyles}
            />
          ))}
        </SignalLabels>
        <SignalTextContainer>
          <WithTooltip
            styles={tooltipStyles}
            zIndex={9999}
            placement="bottom"
            content={sentiment?.sl_body}
            containerStyle={{ width: '100%' }}
          >
            <SignalText>{sentiment?.sl_body}</SignalText>
          </WithTooltip>
        </SignalTextContainer>
        <SignalFooterText>
          {`${formatDistance(timestamp, Date.now(), {
            addSuffix: true,
          })} | Most Recent`}
        </SignalFooterText>
      </Wrapper>
    </Card>
  );
}

export default SentimentCard;
