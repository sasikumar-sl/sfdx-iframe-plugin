import React, { useRef } from 'react';

import Sliders from '../Slider/Slider.component';

import { generateUniqKey, TNotes } from '../../common';
import Annotation from './Annotation/Annotation.component';

import {
  Wrapper,
  AnnoationSlide,
  NoAnnoationPlaceholder,
} from './Annotations.styes';

type Props = {
  annotations: TNotes[];
};

function Annotations({ annotations = [] }: Props) {
  const sliderSettings = useRef({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    className: 'annotations-slider',
  });

  if (!annotations?.length) {
    return (
      <NoAnnoationPlaceholder>No Annotations found</NoAnnoationPlaceholder>
    );
  }

  const renderer = (annotation: TNotes) => (
    <AnnoationSlide
      className="annotation-slide-wrapper"
      key={annotation?.s_id ?? generateUniqKey()}
    >
      <Annotation annotation={annotation} />
    </AnnoationSlide>
  );

  return (
    <Wrapper>
      <Sliders
        id="sliders-wrapper-annotations"
        height={140}
        showArrows
        items={annotations}
        renderer={renderer}
        sliderSettings={sliderSettings?.current}
      />
    </Wrapper>
  );
}

export default Annotations;
