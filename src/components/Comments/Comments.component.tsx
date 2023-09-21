import React,  { CSSProperties, useMemo } from 'react';

import useCaseContext from '../../reactCustomHooks/useCaseContext';
import Sliders from '../../components/Slider/Slider.component';

import { generateUniqKey } from '../../common/helpers/utils/IdGenerater';
import Comment from './Comment/Comment.component';

import {
    Wrapper,
    CommentSlide,
    StyledPrevButton,
    StyledNextButton,
} from './Comments.styes';


type Props = {};

const Comments: React.FC<Props> = () => {

    const { selectedSentiment } = useCaseContext();
    const comments = useMemo(() => selectedSentiment?.annotations ?? [], [selectedSentiment]);

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        className: 'comments-slider',
        // prevArrow: <StyledPrevButton/>,
        // nextArrow: <StyledNextButton/>,
    };

    const renderer = (annotation: any) => (
        <CommentSlide className='comment-slide-wrapper' key={annotation?.id ?? generateUniqKey()}>
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
                    // showPagination
                />
        </Wrapper>
    );
};

export default Comments;