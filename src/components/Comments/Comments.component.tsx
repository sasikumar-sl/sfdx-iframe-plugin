import React, { useCallback, useRef } from 'react';

import Sliders from '../Slider/Slider.component';
import Comment from './Comment/Comment.component';

import { TSegment, generateUniqKey } from '../../common';
import { CaseCommmentSlide } from './comments.styels';
import useCaseContext from '../../reactCustomHooks/useCaseContext';

type Props = {
  comments: TSegment[];
};
function Comments({ comments }: Props) {
  const { setCurrentSegmentIdx } = useCaseContext();

  const sliderSettings = useRef({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    className: 'case-segments-slider',
  });

  const onHandleSliderChange = useCallback(
    (current: number): void => {
      setCurrentSegmentIdx(current ?? 0);
    },
    [setCurrentSegmentIdx],
  );

  const renderer = (caseCommment: TSegment) => (
    <CaseCommmentSlide
      className="case-segments-slide-wrapper"
      key={caseCommment?.s_id ?? generateUniqKey()}
    >
      <Comment comment={caseCommment} />
    </CaseCommmentSlide>
  );
  return (
    <Sliders
      id="sliders-wrapper-segments"
      height={124}
      showPagination
      renderer={renderer}
      items={comments ?? []}
      sliderSettings={sliderSettings?.current}
      onAfterChange={onHandleSliderChange}
    />
  );
}

export default Comments;
