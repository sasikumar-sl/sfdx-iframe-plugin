import styled from 'styled-components';

import { ReactComponent as DoubleDownIcon } from '../../icons/chevron-double-down.svg';
import { ReactComponent as DoubleUpIcon } from '../../icons/chevron-double-up.svg';

export const FooterContainer = styled.section`
  height: 40px;
  flex-shrink: 0;
  border: 1px solid #d7d7d7;
  background: #fff;
  padding: 0 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.div`
  color: #4a4a4a;
  font-family: Avenir;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  flex-grow: 1;
  text-align: center;
`;

export const IconWrapper = styled.span`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  border-radius: 100%;

  &:hover {
    background: #e7f8fe;
    border-radius: 100%;
  }
`;

export const StyledDoubleDownIcon = styled(DoubleDownIcon)``;

export const StyledDoubleUpIcon = styled(DoubleUpIcon)``;

type CollapsibleHeaderType = {
  noBorder?: boolean;
};
export const CollapsibleHeader = styled.div<CollapsibleHeaderType>`
  height: 40px;
  flex-shrink: 0;
  background: #fff;
  padding: 0 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #d7d7d7;

  ${({ noBorder }) =>
    noBorder &&
    `
      border-bottom: none;
    `};
`;

export const CollapsibleBody = styled.div`
  padding-top: 10px;
  height: 270px;
  width: 100%;
  border: 1px solid #d7d7d7;
  border-top: none;

  position: relative;

  .annotations-slider {
    /* margin-top: 10px; */
  }
`;

export const AnnotationSlide = styled.div`
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

  &.annotations-slide-wrapper {
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    /* margin-top: 6px; */
  }
`;

export const CommentsWrapper = styled.div`
  height: 140px;
  width: 100%;
  border: 1px solid #d7d7d7;
  background: #fff;

  position: absolute;
  bottom: 0;
`;
