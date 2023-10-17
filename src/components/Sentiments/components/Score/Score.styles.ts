import styled from 'styled-components';

import { Score } from '@supportlogic/frontend-library';
import { ReactComponent as InfoIcon } from '../../../../icons/circled-information.svg';
import { SkeletonLoader } from '../../../../common';

export const ScoreWrapper = styled.div`
  display: inline-flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledScore = styled(Score)`
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

export const StyledInfoIcon = styled(InfoIcon)`
  width: 16px;
  height: 16px;
  margin-top: 6px;
`;

export const SkeletonScore = styled(SkeletonLoader)`
  height: 22px;
  width: 22px;
  border-radius: 50%;
`;

export const SkeletonName = styled(SkeletonLoader)`
  width: 100px;
  height: 16px;
  font-size: 13px;
`;

export const SkeletonIcon = styled(SkeletonLoader)`
  border-radius: 50%;
  width: 17px;
  min-height: 17px;
  margin-top: 6px;
`;
