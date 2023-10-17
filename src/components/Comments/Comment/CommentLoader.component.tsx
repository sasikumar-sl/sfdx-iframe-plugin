import React from 'react';

import { SkeletonLoader } from '../../../common';

import {
  LoaderContainer,
  LoaderWrapper,
  SkeletonText,
  SkeletonWrapper,
} from './Comment.styles';

function CommentLoader() {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <SkeletonWrapper>
          <SkeletonText>
            <SkeletonLoader count={3} />
            <SkeletonLoader width="40%" />
          </SkeletonText>
        </SkeletonWrapper>
      </LoaderContainer>
    </LoaderWrapper>
  );
}

export default CommentLoader;
