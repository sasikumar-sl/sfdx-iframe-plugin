import React, { useCallback, useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ReactComponent as ArrowRightIcon } from '../../icons/arrow-right.svg';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow-left.svg';
import { generateUniqKey } from '../../common';

import { TPaginationPostion } from './Slider.types';

import {
  Wrapper,
  Pagination,
  ArrowsWrapper,
  PaginationText,
  PaginationButton,
} from './Slider.styles';

type Props = {
  id?: string;
  items: any[];
  showArrows?: boolean;
  height?: string | number;
  sliderSettings?: Settings;
  showPagination?: boolean;
  onAfterChange?: (current: number) => void;
  paginationPosition?: TPaginationPostion;
  renderer: (item: any, index: number) => React.ReactNode;
};

function Sliders({
  id = `slider-${generateUniqKey()}`,
  items,
  height,
  renderer = () => <div />,
  showPagination = false,
  showArrows = false,
  onAfterChange = () => {},
  paginationPosition = 'top-right',
  sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    className: 'sliders',
  },
}: Props) {
  const [slide, setSlide] = useState(0);
  const slider = useRef<any>();
  const sliderWrapper = useRef<any>();

  const handlePrevBtnClick = useCallback((): void => {
    slider?.current?.slickPrev();
  }, [slider]);

  const handleNextBtnClick = useCallback((): void => {
    slider?.current?.slickNext();
  }, [slider]);

  const MemoizedSlides = useMemo(() => items?.map(renderer), [items, renderer]);

  return (
    <Wrapper
      id={id}
      ref={sliderWrapper}
      numberOfSlides={items?.length ?? 0}
      height={height}
      hasPagination={showPagination}
    >
      {showArrows && items?.length ? (
        <ArrowsWrapper>
          <ArrowLeftIcon
            id="pre-arrow"
            onClick={handlePrevBtnClick}
            className={slide === 0 ? 'disabled' : ''}
          />
          <ArrowRightIcon
            id="next-arrow"
            onClick={handleNextBtnClick}
            className={slide === items.length - 1 ? 'disabled' : ''}
          />
        </ArrowsWrapper>
      ) : null}

      <Slider
        ref={slider}
        afterChange={(current: number) => {
          setSlide(current);
          onAfterChange(current);
        }}
        dotsClass="slick-dots slick-dots-custom"
        {...sliderSettings}
      >
        {MemoizedSlides}
      </Slider>

      {showPagination && items?.length > 1 ? (
        <Pagination className="pagination" position={paginationPosition}>
          {slide !== 0 && (
            <PaginationButton onClick={handlePrevBtnClick}>
              <ArrowLeftIcon />
            </PaginationButton>
          )}

          <PaginationText>{`${slide + 1} / ${items?.length}`}</PaginationText>

          {slide + (sliderSettings?.slidesToShow ?? 0) <
            (items?.length ?? 0) && (
            <PaginationButton onClick={handleNextBtnClick}>
              <ArrowRightIcon />
            </PaginationButton>
          )}
        </Pagination>
      ) : null}
    </Wrapper>
  );
}

export default Sliders;
