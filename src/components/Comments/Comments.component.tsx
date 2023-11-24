import React from 'react';

import Sliders from '../Slider/Slider.component';
import Comment from './Comment/Comment.component';

import { TComment, generateUniqKey } from '../../common';
import { CaseCommmentSlide } from './comments.styels';

type Props = {
  comments: TComment[];
};
function Comments({ comments }: Props) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    className: 'case-comments-slider',
  };

  const renderer = (caseCommment: TComment) => (
    <CaseCommmentSlide
      className="case-comments-slide-wrapper"
      key={caseCommment?.s_id ?? generateUniqKey()}
    >
      <Comment comment={caseCommment} />
    </CaseCommmentSlide>
  );
  return (
    <Sliders
      id="sliders-wrapper-case-comments"
      height={124}
      showPagination
      renderer={renderer}
      items={comments ?? []}
      sliderSettings={sliderSettings}
    />
  );
}

export default Comments;
