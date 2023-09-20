import styled from 'styled-components';

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

type RangeBallType = {
  isActive?: boolean;
  background: string;
  color?: string;
};

export const RangeBall = styled.div<RangeBallType>`
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

type LinkLineType = {
  from: string;
  to: string;
};

export const LinkingLine = styled.div<LinkLineType>`
  height: 5px;
  width: 1.3vw;
  background: linear-gradient(90deg, ${({ from }) => from}, ${({ to }) => to});
`;

type LabelType = {
  isActive?: boolean;
};

export const Label = styled.div<LabelType>`
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  position: absolute;
  width: 60px;

  span {
    display: block;
  }

  color: #4A4A4A;
  font-family: Avenir;
  font-style: normal;
  font-weight: 300;
  white-space: nowrap;
  line-height: normal;
  margin-left: -14px;
`;
