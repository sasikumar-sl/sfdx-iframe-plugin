import React, { startTransition, useCallback, useMemo, useState } from 'react';
import Collapsible from 'react-collapsible';

import { generateUniqKey } from '../../common';
import Sliders from '../Slider/Slider.component';
import useCaseContext from '../../reactCustomHooks/useCaseContext';
import AnnotationCard from '../AnnotationCard/AnnotationCard.component';

import {
  Label,
  IconWrapper,
  AnnotationSlide,
  CommentsWrapper,
  FooterContainer,
  CollapsibleBody,
  CollapsibleHeader,
  StyledDoubleUpIcon,
  StyledDoubleDownIcon,
} from './Footer.styles';
import Comments from '../Comments/Comments.component';

function Footer(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { selectedSentiment, setSelectedAnnotation } = useCaseContext();

  const annotations = useMemo(
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
    className: 'annotations-slider',
  };

  const onHandleSliderChange = useCallback(
    (current: number): void => {
      setSelectedAnnotation(annotations[current] ?? 0);
    },
    [annotations, setSelectedAnnotation],
  );

  if (!annotations.length) {
    return (
      <FooterContainer>
        <Label>No Case Annotations</Label>
      </FooterContainer>
    );
  }

  const renderer = (annotation: any) => (
    <AnnotationSlide
      className="annotations-slide-wrapper"
      key={annotation?.id ?? generateUniqKey()}
    >
      <AnnotationCard annotation={annotation} />
    </AnnotationSlide>
  );
  const icon = isOpen ? <StyledDoubleUpIcon /> : <StyledDoubleDownIcon />;

  return (
    <Collapsible
      key={generateUniqKey()}
      openedClassName="collapse-open"
      open={isOpen}
      handleTriggerClick={() => setIsOpen((val) => !val)}
      trigger={
        <CollapsibleHeader noBorder={isOpen}>
          <Label>Case Annotations</Label>
          <IconWrapper>{icon}</IconWrapper>
        </CollapsibleHeader>
      }
    >
      <CollapsibleBody>
        <Sliders
          height={124}
          showPagination
          renderer={renderer}
          items={annotations ?? []}
          sliderSettings={sliderSettings}
          onAfterChange={onHandleSliderChange}
        />
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </CollapsibleBody>
    </Collapsible>
  );
}

export default Footer;
