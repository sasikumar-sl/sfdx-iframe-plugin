import React from 'react';

import { SkeletonLoader } from '../../../../common';

import {
  LoaderWrapper,
  SkeletonBottom,
  SkeletonDate,
  SkeletonDivider,
  SkeletonLabels,
  SkeletonRecent,
  SkeletonSentimentCard,
  SkeletonText,
  SkeletonTitle,
} from './Sentiment.styles';

function SentimentLoader() {
  return (
    <LoaderWrapper>
      <SkeletonTitle>
        <SkeletonLoader />
      </SkeletonTitle>
      <SkeletonSentimentCard>
        <SkeletonLabels>
          <SkeletonLoader width={70} height={24} />
          <SkeletonLoader width={90} height={24} />
        </SkeletonLabels>
        <SkeletonText>
          <SkeletonLoader />
        </SkeletonText>
        <SkeletonBottom>
          <SkeletonDate>
            <SkeletonLoader />
          </SkeletonDate>
          <SkeletonDivider>
            <SkeletonLoader />
          </SkeletonDivider>
          <SkeletonRecent>
            <SkeletonLoader />
          </SkeletonRecent>
        </SkeletonBottom>
      </SkeletonSentimentCard>
    </LoaderWrapper>
  );
}

export default SentimentLoader;
