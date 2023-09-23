import styled from 'styled-components';
import { TLabel, TLinkLine, TRangeBall } from './SentimentScorePopover.types';

export const ScaleWrapper = styled.div`
  max-width: 445px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px 15px 25px;
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
`;

export const LinkingLine = styled.div<TLinkLine>`
  height: 5px;
  width: 1.3vw;
  background: linear-gradient(90deg, ${({ from }) => from}, ${({ to }) => to});
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
`;
