import React, { CSSProperties, useMemo } from 'react';
import { formatDistance } from 'date-fns';

import { SignalLabel, WithTooltip } from '@supportlogic/frontend-library';
import useCaseContext from '../../../../reactCustomHooks/useCaseContext';

import {
  getSignalLabelStyles,
  formatLabels,
} from '../../../../common/helpers/sentiments/sentimentsHelper';

import {
  Wrapper,
  Container,
  SignalText,
  BluredTitle,
  SignalLabels,
  BluredWrapper,
  SignalFooterText,
  TooltipContainer,
  SignalTextContainer,
} from './Sentiment.styles';
import { TComments, formatToLocal } from '../../../../common';
import { supportDetailsEndPoint } from '../../../../common/constants';

type Props = {
  isBlured: boolean;
  sentiment: TComments;
  tooltipStyles?: CSSProperties;
};

function Sentiment({ sentiment, tooltipStyles, isBlured }: Props) {
  const { salesforceData } = useCaseContext();

  const spans = sentiment?.spans
    ?.map((span: any) => Object.keys(span).filter((key) => span[key] === true))
    .flat();
  const labels = formatLabels(spans);

  const createdAt = useMemo(() => {
    if (!sentiment?.sl_created_at) return null;

    const formattedDate = new Date(
      formatToLocal(sentiment.sl_created_at).toDate(),
    ).getTime();

    return `${formatDistance(formattedDate, Date.now(), {
      addSuffix: true,
    })} | Most Recent`;
  }, [sentiment?.sl_created_at]);

  const Blured = useMemo(() => {
    if (!isBlured) return null;

    const baseUrl = salesforceData?.sl_api_url?.replace('iframe.', '');
    const caseNumber =
      Number(salesforceData?.parent_number) ?? salesforceData?.parent_number;
    const caseLink = `${baseUrl}/${supportDetailsEndPoint}/${caseNumber}`;

    return (
      <BluredWrapper>
        <BluredTitle>
          Visit{' '}
          <a href={caseLink} target="_blank" rel="noreferrer">
            SupportLogic
          </a>{' '}
          to view more sentiments{' '}
        </BluredTitle>
      </BluredWrapper>
    );
  }, [isBlured, salesforceData?.sl_api_url, salesforceData?.parent_number]);

  return (
    <Container>
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
            content={<TooltipContainer>{sentiment?.body}</TooltipContainer>}
            containerStyle={{ width: '100%' }}
          >
            <SignalText>{sentiment?.body}</SignalText>
          </WithTooltip>
        </SignalTextContainer>
        <SignalFooterText>{createdAt}</SignalFooterText>
      </Wrapper>
    </Container>
  );
}

export default Sentiment;
