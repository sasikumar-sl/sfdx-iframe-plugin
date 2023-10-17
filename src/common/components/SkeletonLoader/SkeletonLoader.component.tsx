/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonLoader = (props: SkeletonProps): React.ReactNode | any => (
  <Skeleton {...props} />
);
