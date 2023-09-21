import styled from "styled-components";
import { Score } from '@supportlogic/frontend-library';

import { ReactComponent as InfoIcon } from '../../icons/circled-information.svg'; 

export const SentimentsContainer = styled.div`
    width: 100%;
    height: 100%;
`;


export const Scorers = styled.div`
    height: 62px;
    width: 100%;
    background: #fff;
    display: inline-flex;
    justify-content: center;
    gap: 40px;
`;

export const ScoreWrapper = styled.div`
    display: inline-flex;
    padding: 4px;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const StyledScore = styled(Score)`
    gap: 8px !important;
    color: #4A4A4A;
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

export const ScoreCardsWrapper = styled.div`
    height: 200px;
    background: #F8F8F8;
    position: relative;
`;

export const SentimentSlide = styled.div`
  position: relative;

  & + & {
    :before {
      content: ' ';
      height: 100px;
      width: 1px;
      background: #e1e1e1;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }

  &.sentiment-slide-wrapper {
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    /* margin-top: 6px; */
  }
`;

export const Title = styled.div`
  color: #4A4A4A;
  font-family: Avenir;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  padding: 6px 0 0;
`;
