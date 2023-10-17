import React from 'react';

import { SkeletonLoader } from '../../../common';

import {
  SkeletonProfile,
  LoaderContainer,
  LoaderWrapper,
  SkeletonHeader,
  SkeletonName,
  SkeletonText,
  SkeletonDate,
  SkeletonWrapper,
} from './Annotation.styles';

function AnnotationLoader() {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <SkeletonWrapper>
          <SkeletonHeader>
            <SkeletonProfile>
              <SkeletonLoader circle width={28} height={28} />
              <SkeletonName>
                <SkeletonLoader />
              </SkeletonName>
            </SkeletonProfile>
            <SkeletonDate>
              <SkeletonLoader />
            </SkeletonDate>
          </SkeletonHeader>
          <SkeletonText>
            <SkeletonLoader count={2} />
            <SkeletonLoader width="70%" />
          </SkeletonText>
        </SkeletonWrapper>
      </LoaderContainer>
    </LoaderWrapper>
  );
}

export default AnnotationLoader;
