import styled from 'styled-components';

import { ReactComponent as DoubleDownIcon } from '../../icons/chevron-double-down.svg';
import { ReactComponent as DoubleUpIcon } from '../../icons/chevron-double-up.svg';

const Border = styled.section`
  display: flex;
  align-items: center;

  border: 1px solid #d7d7d7;
  background: #fff;
  padding: 0 12px;
`;

export const LoaderWrapper = styled(Border)`
  justify-content: center;
  width: 100%;
  min-height: 40px;
  gap: 10px;
`;

export const FooterContainer = styled(Border)`
  justify-content: space-between;
  height: 40px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  color: #4a4a4a;
  font-family: Avenir;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Label = styled(Title)`
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

type TCollapsibleHeader = {
  hasBorder?: boolean;
  disabled?: boolean;
};

export const CollapsibleHeader = styled.div<TCollapsibleHeader>`
  height: 40px;
  flex-shrink: 0;
  background: #fff;
  padding: 0 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #d7d7d7;
  border-left: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
  border-bottom: ${(props) =>
    props?.hasBorder ? 'none' : '1px solid #d7d7d7'};

  ${(props) =>
    props?.disabled &&
    `
      cursor: not-allowed;
      pointer-events: none;

      & div {
        color: #e1e1e1;
      }
      & svg {
        opacity: 0.4;
      }
  `}
`;

export const CollapsibleBody = styled.div`
  padding-top: 10px;
  height: 270px;
  width: 100%;
  border: 1px solid #d7d7d7;
  border-top: none;
  background: #ffffff;
  position: relative;
`;

export const CaseCommmentSlide = styled.div`
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

  &.case-comments-slide-wrapper {
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    /* margin-top: 6px; */
  }
`;

export const AnnotationWrapper = styled.div`
  height: 140px;
  width: 100%;
  border: 1px solid #d7d7d7;
  background: #fff;

  position: absolute;
  bottom: 0;
`;
