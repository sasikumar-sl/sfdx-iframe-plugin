import React, { useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    Wrapper,
    Pagination,
    PaginationText,
    PaginationButton,
    StyledPrevButton,
    StyledNextButton,
    paginationPostion,
    StyledArrowLeftIcon,
    StyledArrowRightIcon,
} from './Slider.styles';

type Props = {
    items: any[];
    height?: string | number;
    sliderSettings?: Settings; 
    showPagination?: boolean;
    paginationPosition?: paginationPostion;
    renderer: (item: any, index: number) => React.ReactNode;
    showArrows?: boolean;
};

const Sliders: React.FC<Props> = ({
  items,
  height,
  renderer = () => <div/>,
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
    className: 'sliders'
}}) => {

  const [slide, setSlide] = useState(0);
  const slider = useRef<any>();
  const sliderWrapper = useRef<any>();

  const handlePrevBtnClick  = (): void => {
    slider?.current?.slickPrev();
  };
  
  const handleNextBtnClick  = (): void => {
    slider?.current?.slickNext();
  } ;

  const MemoizedSlides = useMemo(() => {
    return items?.map(renderer);
  }, [items, renderer])

  const Arrows = useMemo(() => {
    if (!(showArrows && items?.length)) return null;

    return <>
      <StyledPrevButton className='pre-button' onClick={handlePrevBtnClick} />
      <StyledNextButton className='next-button' onClick={handleNextBtnClick} />
    </>
  }, [showArrows, items?.length]);

  return (
    <Wrapper ref={sliderWrapper} numberOfSlides={items?.length ?? 0} height={height} hasPagination={showPagination} >
      {Arrows}

      <Slider ref={slider} {...sliderSettings}  afterChange={(current: number) => setSlide(current)} dotsClass="slick-dots slick-dots-custom">
        {MemoizedSlides}
      </Slider>

      {showPagination && items?.length > 1 && (
        <Pagination className='pagination' position={paginationPosition}>

          {slide !== 0 && (
            <PaginationButton onClick={handlePrevBtnClick}>
              <StyledArrowLeftIcon />
            </PaginationButton>
          )}

          <PaginationText>
            {`${slide+1} / ${ items?.length}`}
          </PaginationText>

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
};

export default Sliders;