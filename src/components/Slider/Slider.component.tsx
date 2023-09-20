import React, { useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    Wrapper,
    Pagination,
    PaginationText,
    PaginationButton,
    StyledArrowRightIcon,
    StyledArrowLeftIcon,
    paginationPostion,
} from './Slider.styles';
  
type Props = {
    items: any[];
    sliderSettings?: Settings; 
    renderer: (item: any, index: number) => React.ReactNode;
    showPagination?: boolean;
    paginationPosition?: paginationPostion;
};

const Sliders: React.FC<Props> = ({
  items,
  renderer = () => <div/>,
  showPagination = false,
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

  const MemoizedSlides = useMemo(() => {
    return items?.map(renderer);
  }, [items, renderer])

  return (
    <Wrapper ref={sliderWrapper} numberOfSlides={items?.length ?? 0}>
      <Slider ref={slider} {...sliderSettings}  afterChange={(current: number) => setSlide(current)} dotsClass="slick-dots slick-dots-custom">
        {MemoizedSlides}
      </Slider>
      {showPagination && items?.length > 1 && (
        <Pagination className='pagination' position={paginationPosition}>

          {slide !== 0 && (
            <PaginationButton onClick={() => slider?.current?.slickPrev()}>
              <StyledArrowLeftIcon />
            </PaginationButton>
          )}

          <PaginationText>
            {`${slide+1} / ${ items?.length}`}
          </PaginationText>

          {slide + (sliderSettings?.slidesToShow ?? 0) <
            (items?.length ?? 0) && (
            <PaginationButton onClick={() => slider?.current?.slickNext()}>
              <StyledArrowRightIcon />
            </PaginationButton>
          )}
        </Pagination>
      )}
    </Wrapper>
  );
};

export default Sliders;