import React, { useMemo } from 'react';

import useCaseContext from '../../reactCustomHooks/useCaseContext';
import Sliders from '../Slider/Slider.component';

import { generateUniqKey } from '../../common/helpers/utils/IdGenerater';
import Comment from './Comment/Comment.component';

import { Wrapper, CommentSlide } from './Comments.styes';

type Props = {};

function Comments(): JSX.Element {
  const { selectedSentiment } = useCaseContext();

  const comments = useMemo(
    () => selectedSentiment?.annotations ?? [],
    [selectedSentiment],
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

  const renderer = (annotation: any) => (
    <CommentSlide
      className='comment-slide-wrapper'
      key={annotation?.id ?? generateUniqKey()}
    >
      <Comment />
    </CommentSlide>
  );

  return (
    <Wrapper>
      <Sliders
        height={140}
        items={comments}
        sliderSettings={sliderSettings}
        renderer={renderer}
        showArrows
      />
    </Wrapper>
  );
}

export default Comments;
