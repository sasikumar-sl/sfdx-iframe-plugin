import React from 'react';

// import useCaseContext from '../../reactCustomHooks/useCaseContext';
import Sliders from '../Slider/Slider.component';

import { generateUniqKey, TComment } from '../../common';
import Comment from './Comment/Comment.component';

import { Wrapper, CommentSlide, NoCommentsPlaceholder } from './Comments.styes';

type Props = {
  comments: TComment[];
};

function Comments({ comments = [] }: Props) {
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

  if (!comments?.length) {
    return <NoCommentsPlaceholder>No Commensts found</NoCommentsPlaceholder>;
  }

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
        id="sliders-wrapper-comments"
        height={140}
        showArrows
        items={comments}
        renderer={renderer}
        sliderSettings={sliderSettings}
      />
    </Wrapper>
  );
}

export default Comments;
