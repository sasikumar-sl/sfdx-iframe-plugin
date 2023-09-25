import React, { useCallback, useMemo, useState } from 'react';
import Collapsible from 'react-collapsible';

import { FancyLoader } from '@supportlogic/frontend-library';
import { TAnnotation, TComment, generateUniqKey } from '../../common';
import Sliders from '../Slider/Slider.component';
import useCaseContext from '../../reactCustomHooks/useCaseContext';
import AnnotationCard from '../AnnotationCard/AnnotationCard.component';

import {
  Label,
  Title,
  IconWrapper,
  LoaderWrapper,
  AnnotationSlide,
  CommentsWrapper,
  FooterContainer,
  CollapsibleBody,
  CollapsibleHeader,
  StyledDoubleUpIcon,
  StyledDoubleDownIcon,
} from './Footer.styles';
import Comments from '../Comments/Comments.component';

type Props = {
  annotations: TAnnotation[];
  isOpen?: boolean;
  collapsibleId?: string;
};

function Footer({
  annotations = [],
  isOpen = false,
  collapsibleId = generateUniqKey(),
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isOpen);
  const { isLoading, currentAnnotationIdx, handleAnnotationChanges } =
    useCaseContext();

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
      handleAnnotationChanges(current ?? 0);
    },
    [handleAnnotationChanges],
  );

  const comments: TComment[] = useMemo(
    () => annotations?.[currentAnnotationIdx]?.comments ?? [],
    [annotations, currentAnnotationIdx],
  );

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Title>Case Annotations</Title>
        <FancyLoader size={10} />
      </LoaderWrapper>
    );
  }

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
  const icon = isCollapsed ? <StyledDoubleUpIcon /> : <StyledDoubleDownIcon />;

  return (
    <Collapsible
      key={collapsibleId}
      openedClassName="collapse-open"
      open={isCollapsed}
      handleTriggerClick={() => setIsCollapsed((val) => !val)}
      trigger={
        <CollapsibleHeader noBorder={isCollapsed}>
          <Label>Case Annotations</Label>
          <IconWrapper>{icon}</IconWrapper>
        </CollapsibleHeader>
      }
    >
      <CollapsibleBody>
        <Sliders
          id="sliders-wrapper-annotations"
          height={124}
          showPagination
          renderer={renderer}
          items={annotations ?? []}
          sliderSettings={sliderSettings}
          onAfterChange={onHandleSliderChange}
        />
        <CommentsWrapper>
          <Comments comments={comments ?? []} />
        </CommentsWrapper>
      </CollapsibleBody>
    </Collapsible>
  );
}

export default Footer;
