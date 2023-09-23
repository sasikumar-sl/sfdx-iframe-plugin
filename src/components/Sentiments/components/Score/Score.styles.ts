import styled from 'styled-components';

import { Score } from '@supportlogic/frontend-library';
import { ReactComponent as InfoIcon } from '../../../../icons/circled-information.svg';

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
  margin-top: 3px;
`;
