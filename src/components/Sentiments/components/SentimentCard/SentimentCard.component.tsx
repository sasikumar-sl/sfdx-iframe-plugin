import React, { CSSProperties } from "react";
import { formatDistance } from 'date-fns';
import { SignalLabel, WithTooltip } from "@supportlogic/frontend-library";

import { getSignalLabelStyles, formatLabels } from '../../../../common/helpers/sentiments/sentimentsHelper';

import {
    Card,
    Wrapper,
    SignalLabels,
    SignalText,
    SignalTextContainer,
    SignalFooterText
} from "./SentimentCard.styles";
import { SentimentType } from "../../Sentiments.interface";

type Props = {
    sentiment: SentimentType;
    tooltipStyles?: CSSProperties; 
};

const SentimentCard: React.FC<Props> = ({ sentiment, tooltipStyles }) => {
    const labels = formatLabels(sentiment.labels);
    const timestamp = new Date(sentiment.created_at).getTime();
    return <Card>
        <Wrapper>
            <SignalLabels>
            {labels.map((label, index) => (
                <SignalLabel
                key={index}
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
                    content={sentiment?.text}
                    containerStyle={{ width: '100%' }}
                >
                    <SignalText>{sentiment?.text}</SignalText>
                </WithTooltip>
            </SignalTextContainer>
            <SignalFooterText>
              {`${formatDistance(timestamp, Date.now(), {
                addSuffix: true,
              })} | Most Recent`}
            </SignalFooterText>
        </Wrapper>
    </Card>
};

export default SentimentCard;