import styled from 'styled-components';
import { TLabel, TLinkLine, TRangeBall } from './SentimentScorePopover.types';

export const ScaleWrapper = styled.div`
  max-width: 445px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px 15px 25px;
  min-width: 265px;

  @media (max-width: 305px) {
    padding: 5px 5px 38px;
    width: 265px;
  }
`;

export const RangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RangeBall = styled.div<TRangeBall>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color = '#ffffff' }) => color};
  border-radius: 100%;
  height: 28px;
  width: 28px;
  border: 2px solid #ffffff;
  background-color: ${({ background }) => background};
  font-weight: 400;
  span {
    font-family: Avenir;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 305px) {
    height: 25px;
    width: 25px;
  }

  @media (min-width: 400px) {
    height: 26px;
    width: 26px;
  }

  @media (min-width: 430px) {
    height: 26px;
    width: 26px;
  }
`;

export const LinkingLine = styled.div<TLinkLine>`
  height: 5px;
  min-width: 1rem;
  background: linear-gradient(90deg, ${({ from }) => from}, ${({ to }) => to});

  @media (max-width: 305px) {
    min-width: 0.6rem;
  }
`;

export const Label = styled.div<TLabel>`
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  position: absolute;
  width: 60px;

  span {
    display: block;
  }

  color: #4a4a4a;
  font-family: Avenir;
  font-style: normal;
  font-weight: 300;
  white-space: nowrap;
  line-height: normal;
  margin-left: -14px;

  @media (max-width: 305px) {
    font-size: 11px;
    white-space: pre-wrap;
  }
  /* Media query for screens with a width of 396 pixels and a height of 600 pixels or more */
  @media (min-width: 400px) {
    font-size: 11px;
  }

  /* Media query for screens with a width of 423 pixels and a height of 600 pixels or more */
  @media (min-width: 430px) {
    font-size: 11px;
  }
`;
