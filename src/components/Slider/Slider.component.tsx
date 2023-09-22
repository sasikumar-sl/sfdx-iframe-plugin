import React, { useCallback, useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Wrapper,
  Pagination,
  PaginationText,
  PaginationButton,
  StyledPrevButton,
  StyledNextButton,
  PaginationPostion,
  StyledArrowLeftIcon,
  StyledArrowRightIcon,
} from './Slider.styles';

type Props = {
  items: any[];
  showArrows?: boolean;
  height?: string | number;
  sliderSettings?: Settings;
  showPagination?: boolean;
  paginationPosition?: PaginationPostion;
  renderer: (item: any, index: number) => React.ReactNode;
};

function Sliders({
  items,
  height,
  renderer = () => <div />,
  showPagination = false,
  showArrows = false,
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
}: Props): JSX.Element {
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

  const Arrows = useMemo(() => {
    if (!(showArrows && items?.length)) return null;

    return (
      <>
        <StyledPrevButton className='pre-button' onClick={handlePrevBtnClick} />
        <StyledNextButton
          className='next-button'
          onClick={handleNextBtnClick}
        />
      </>
    );
  }, [showArrows, items?.length, handlePrevBtnClick, handleNextBtnClick]);

  return (
    <Wrapper
      ref={sliderWrapper}
      numberOfSlides={items?.length ?? 0}
      height={height}
      hasPagination={showPagination}
    >
      {Arrows}

      <Slider
        ref={slider}
        afterChange={(current: number) => setSlide(current)}
        dotsClass='slick-dots slick-dots-custom'
        {...sliderSettings}
      >
        {MemoizedSlides}
      </Slider>

      {showPagination && items?.length > 1 && (
        <Pagination className='pagination' position={paginationPosition}>
          {slide !== 0 && (
            <PaginationButton onClick={handlePrevBtnClick}>
              <StyledArrowLeftIcon />
            </PaginationButton>
          )}

          <PaginationText>{`${slide + 1} / ${items?.length}`}</PaginationText>

          {slide + (sliderSettings?.slidesToShow ?? 0) <
            (items?.length ?? 0) && (
            <PaginationButton onClick={handleNextBtnClick}>
              <StyledArrowRightIcon />
            </PaginationButton>
          )}
        </Pagination>
      )}
    </Wrapper>
  );
}

export default Sliders;
