import React, { useCallback } from 'react';

import Sliders from '../Slider/Slider.component';

import { generateUniqKey, TAnnotation } from '../../common';
import Annotation from './Annotation/Annotation.component';

import {
  Wrapper,
  AnnoationSlide,
  NoAnnoationPlaceholder,
} from './Annotations.styes';
import useCaseContext from '../../reactCustomHooks/useCaseContext';

type Props = {
  annotations: TAnnotation[];
};

function Annotations({ annotations = [] }: Props) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    className: 'annotations-slider',
  };
  const { setCurrentAnnotationIdx } = useCaseContext();

  const onHandleSliderChange = useCallback(
    (current: number): void => {
      setCurrentAnnotationIdx(current ?? 0);
    },
    [setCurrentAnnotationIdx],
  );

  if (!annotations?.length) {
    return (
      <NoAnnoationPlaceholder>No Annotations found</NoAnnoationPlaceholder>
    );
  }

  const renderer = (annotation: TAnnotation) => (
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
        id="sliders-wrapper-comments"
        height={140}
        showArrows
        items={annotations}
        renderer={renderer}
        sliderSettings={sliderSettings}
        onAfterChange={onHandleSliderChange}
      />
    </Wrapper>
  );
}

export default Annotations;
