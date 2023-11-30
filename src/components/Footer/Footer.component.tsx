import React, { useState, useId, useMemo } from 'react';
import Collapsible from 'react-collapsible';
import isArray from 'lodash/isArray';
import orderBy from 'lodash/orderBy';


import { TSegment, SkeletonLoader, TNotes } from '../../common';
import useCaseContext from '../../reactCustomHooks/useCaseContext';

import {
  Label,
  IconWrapper,
  AnnotationWrapper,
  FooterContainer,
  CollapsibleBody,
  CollapsibleHeader,
  StyledDoubleUpIcon,
  StyledDoubleDownIcon,
} from './Footer.styles';
import Annotations from '../Annotations/Annotations.component';
import Comments from '../Comments/Comments.component';
import AnnotationLoader from '../Annotations/Annotation/AnnotationLoader.component';
import CommentLoader from '../Comments/Comment/CommentLoader.component';

type Props = {
  isOpen?: boolean;
  caseSegments?: TSegment[];
};

function Footer({ isOpen = false, caseSegments = [] }: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isOpen);
  const { hasError, isCaseDetailsLoading, currentSegmentIdx } =
    useCaseContext();
  const collapsibleId = useId();

  const caseAnnotations: TNotes[] = useMemo(() => {
    const annotations = caseSegments?.[currentSegmentIdx]?.notes ?? [];
    return isArray(annotations)
      ? orderBy(annotations, 's_created_at', 'desc')
      : [];
  }, [caseSegments, currentSegmentIdx]);

  if (!isCaseDetailsLoading && !caseAnnotations.length) {
    return (
      <FooterContainer>
        <Label>No Case Annotations</Label>
      </FooterContainer>
    );
  }

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
          <Label>
            {isCaseDetailsLoading ? (
              <SkeletonLoader width={150} height={15} />
            ) : (
              'Case Annotations'
            )}
          </Label>
          <IconWrapper>{icon}</IconWrapper>
        </CollapsibleHeader>
      }
    >
      <CollapsibleBody>
        {isCaseDetailsLoading ? (
          <>
            <CommentLoader />
            <AnnotationWrapper>
              <AnnotationLoader />
            </AnnotationWrapper>
          </>
        ) : (
          <>
            <Comments comments={caseSegments} />
            <AnnotationWrapper>
              <Annotations annotations={caseAnnotations ?? []} />
            </AnnotationWrapper>
          </>
        )}
      </CollapsibleBody>
    </Collapsible>
  );
}

export default Footer;
