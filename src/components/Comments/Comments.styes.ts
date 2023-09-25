import styled from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow-left.svg'; // Import the SVG file as a component
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow-right.svg'; // Import the SVG file as a component

export const Wrapper = styled.div`
  .comments-slider {
    .slick-arrow {
      &.slick-prev {
        /* left: 10%; */
      }

      &.slick-next {
        /* right: 10%; */
      }
    }
  }
`;

export const CommentSlide = styled.div`
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

  &.comment-slide-wrapper {
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
  }
`;

const arrowStyles = `
    height: 32px;
    width: 32px;
    border-radius: 100%;
    cursor: pointer;
    background: rgb(255, 255, 255);
    transition: background-color 0.3s;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5); 
    z-index: 3;

    &:hover {
      background-color: rgb(231, 248, 254);
    }
`;

export const StyledPrevButton = styled(ArrowLeftIcon)`
  ${arrowStyles}
`;

export const StyledNextButton = styled(ArrowRightIcon)`
  ${arrowStyles}
`;
