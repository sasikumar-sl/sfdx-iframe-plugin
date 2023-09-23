import React, { useMemo } from 'react';

import useCaseContext from '../../reactCustomHooks/useCaseContext';
import Sliders from '../Slider/Slider.component';

import { generateUniqKey } from '../../common/helpers/utils/IdGenerater';
import Comment from './Comment/Comment.component';

import { Wrapper, CommentSlide } from './Comments.styes';
import { TComment } from './Comments.types';

function Comments(): React.JSX.Element {
  const { selectedAnnotation } = useCaseContext();

  const comments = useMemo(
    () => selectedAnnotation?.comments ?? [],
    [selectedAnnotation],
  );

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    className: 'comments-slider',
  };

  const renderer = (comment: TComment) => (
    <CommentSlide
      className="comment-slide-wrapper"
      key={comment?.id ?? generateUniqKey()}
    >
      <Comment comment={comment} />
    </CommentSlide>
  );

  return (
    <Wrapper>
      <Sliders
        showArrows
        height={140}
        items={comments}
        renderer={renderer}
        sliderSettings={sliderSettings}
      />
    </Wrapper>
  );
}

export default Comments;
