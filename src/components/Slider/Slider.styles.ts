import styled, { css } from 'styled-components';

import { ReactComponent as ArrowRightIcon } from '../../icons/arrow-right.svg';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow-left.svg';

export type PaginationPostion =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

type WrapperType = {
  numberOfSlides?: number;
  height?: string | number;
  hasPagination?: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  position: relative;

  .slick-track {
    margin-left: 0;
    padding-bottom: 10px;
    display: flex;
  }

  .slick-dots-custom {
    & li {
      margin: 0;

      & button::before {
        font-size: 10px;
        color: #cdcdcd;
      }

      &.slick-active button::before {
        color: #9b9b9b;
      }
    }
  }

  .slick-slide {
    ${({ hasPagination }) => hasPagination && 'margin-top: 10px;'}

    ${({ numberOfSlides }) =>
      numberOfSlides === 1 &&
      css`
        &:first-child {
          /* width: 349px !important; */
        }

        &:last-child {
          /* width: 100% !important; */
        }
      `}

    & > div,
    & > div > div {
      height: ${({ height = 131 }) =>
        height && typeof height === 'string' ? height : `${height}px`};
    }
  }
`;

type PagintionType = {
  position?: PaginationPostion;
};
export const Pagination = styled.div<PagintionType>`
  display: flex;
  align-items: center;
  position: absolute;
  height: 24px;
  padding: 0 6px;

  background: #e6e6e6;
  box-shadow: 0px 0px 4px #bebebe;
  border-radius: 12px;

  ${({ position = 'top-right' }) => {
    if (position === 'top-left') {
      return `
        top: 0;
        left: 21%;
      `;
    }
    if (position === 'bottom-right') {
      return `
        bottom: 0;
        right: 21%;
      `;
    }
    if (position === 'bottom-left') {
      return `
        bottom: 0;
        left: 21%;
      `;
    }
    return `
        top: 0;
        right: 21%;
    `;
  }}
`;

export const PaginationText = styled.div`
  margin: 0 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: justify;
  color: #4a4a4a;
`;

export const PaginationButton = styled.span`
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 100%;

  &:hover {
    background: #e7f8fe;
  }

  svg {
    width: 18px;
    height: 18px;
    color: #4a4a4a;
    stroke-width: 0px;
  }
`;

export const StyledArrowRightIcon = styled(ArrowRightIcon)``;
export const StyledArrowLeftIcon = styled(ArrowLeftIcon)``;

const arrowStyles = `
    top: 50%;
    z-index: 2;
    width: 32px;
    height: 32px;
    cursor: pointer;
    position: absolute;
    border-radius: 100%;
    transform: translateY(-50%);
    background: rgb(255, 255, 255);
    transition: background-color 0.3s;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5); 

    &:hover {
      background-color: rgb(231, 248, 254);
    }
`;

export const StyledPrevButton = styled(ArrowLeftIcon)`
  ${arrowStyles}
  left: 10%;
`;
export const StyledNextButton = styled(ArrowRightIcon)`
  ${arrowStyles}
  right: 10%;
`;
