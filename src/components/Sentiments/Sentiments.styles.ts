import styled from 'styled-components';

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

  @media (max-width: 305px) {
    gap: 10px;
  }
`;

export const ScoreCardsWrapper = styled.div`
  height: 200px;
  background: #f8f8f8;
  position: relative;
  padding-top: 12px;
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
  }
`;

export const Title = styled.div`
  color: #4a4a4a;
  font-family: Avenir;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  padding: 5px 0;
`;
