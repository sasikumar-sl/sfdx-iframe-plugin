import React, { useCallback, useMemo, useState } from 'react';
import Collapsible from 'react-collapsible';

import { FancyLoader } from '@supportlogic/frontend-library';
import { TCaseComment, TAnnotation, generateUniqKey } from '../../common';
import Sliders from '../Slider/Slider.component';
import useCaseContext from '../../reactCustomHooks/useCaseContext';
import CaseCommentCard from '../CaseCommentCard/CaseCommentCard.component';

import {
  Label,
  Title,
  IconWrapper,
  LoaderWrapper,
  CaseCommmentSlide,
  AnnotationWrapper,
  FooterContainer,
  CollapsibleBody,
  CollapsibleHeader,
  StyledDoubleUpIcon,
  StyledDoubleDownIcon,
} from './Footer.styles';
import Annotations from '../Annotations/Annotations.component';

type Props = {
  caseComments: TCaseComment[];
  isOpen?: boolean;
  collapsibleId?: string;
};

function Footer({
  caseComments = [],
  isOpen = false,
  collapsibleId = generateUniqKey(),
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isOpen);
  const { isLoading, hasError, currentCommentIdx, setCurrentCommentIdx } =
    useCaseContext();

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

  const onHandleSliderChange = useCallback(
    (current: number): void => {
      setCurrentCommentIdx(current ?? 0);
    },
    [setCurrentCommentIdx],
  );

  const annotations: TAnnotation[] = useMemo(
    () => caseComments?.[currentCommentIdx]?.annotations ?? [],
    [caseComments, currentCommentIdx],
  );

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Title>Case Annotations</Title>
        <FancyLoader size={10} />
      </LoaderWrapper>
    );
  }

  if (!caseComments.length) {
    return (
      <FooterContainer>
        <Label>No Case Annotations</Label>
      </FooterContainer>
    );
  }

  const renderer = (caseCommment: any) => (
    <CaseCommmentSlide
      className="case-comments-slide-wrapper"
      key={caseCommment?.id ?? generateUniqKey()}
    >
      <CaseCommentCard caseCommment={caseCommment} />
    </CaseCommmentSlide>
  );
  const icon = isCollapsed ? <StyledDoubleUpIcon /> : <StyledDoubleDownIcon />;

  return (
    <Collapsible
      key={collapsibleId}
      openedClassName="collapse-open"
      open={isCollapsed && !hasError}
      handleTriggerClick={() =>
        hasError ? null : setIsCollapsed((val) => !val)
      }
      trigger={
        <CollapsibleHeader
          hasBorder={isCollapsed && !hasError}
          disabled={hasError}
        >
          <Label>Case Annotations</Label>
          <IconWrapper>{icon}</IconWrapper>
        </CollapsibleHeader>
      }
    >
      <CollapsibleBody>
        <Sliders
          id="sliders-wrapper-case-comments"
          height={124}
          showPagination
          renderer={renderer}
          items={caseComments ?? []}
          sliderSettings={sliderSettings}
          onAfterChange={onHandleSliderChange}
        />
        <AnnotationWrapper>
          <Annotations annotations={annotations ?? []} />
        </AnnotationWrapper>
      </CollapsibleBody>
    </Collapsible>
  );
}

export default Footer;
