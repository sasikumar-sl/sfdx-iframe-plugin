import styled from 'styled-components';

import { THeight, TWrapper, TPagintion } from './Slider.types';

const getHeight = (height: THeight = 131): string => {
  if (typeof height === 'number') return `height: ${height}px;`;
  return `height: ${height};`;
};

const getMarginTop = (value: boolean): any =>
  value ? 'margin-top: 10px;' : null;

export const Wrapper = styled.div<TWrapper>`
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
    ${({ hasPagination = false }) => getMarginTop(hasPagination)}

    & > div,
    & > div > div {
      ${({ height }) => getHeight(height)}
    }
  }
`;

export const Pagination = styled.div<TPagintion>`
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
        left: 17%;
      `;
    }
    if (position === 'bottom-right') {
      return `
        bottom: 0;
        right: 17%;
      `;
    }
    if (position === 'bottom-left') {
      return `
        bottom: 0;
        left: 17%;
      `;
    }
    return `
        top: 0;
        right: 17%;
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

    /* Floating buttons shadow */
    box-shadow: 0px 3px 10px 0px rgba(151, 151, 151, 0.30);

    &:hover {
      background-color: rgb(231, 248, 254);
    }

    & > path {
      fill: #4a4a4a;
    }

    &.disabled {
      cursor: not-allowed;
      pointer-events: none;
      & > path {
        fill: #9b9b9b;
      }
    }

`;

export const ArrowsWrapper = styled.div`
  svg {
    &#pre-arrow {
      ${arrowStyles}
      left: 10%;

      @media (max-width: 767px) {
        left: 3%;
      }
      @media (max-width: 305px) {
        width: 24px;
        height: 24px;
        left: 0.5%;
      }
    }

    &#next-arrow {
      ${arrowStyles}
      right: 10%;
      @media (max-width: 767px) {
        right: 3%;
      }
      @media (max-width: 305px) {
        width: 24px;
        height: 24px;
        right: 0.5%;
      }
    }
  }
`;
