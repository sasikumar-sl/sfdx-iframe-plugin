import React, { useState, useId } from 'react';
import Collapsible from 'react-collapsible';

import { TAnnotation, TComment, SkeletonLoader } from '../../common';
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
  caseComments: TComment[];
  caseAnnotations?: TAnnotation[];
};

function Footer({
  isOpen = false,
  caseComments = [],
  caseAnnotations = [],
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isOpen);
  const { hasError, isCaseAnnotationsLoading, isCaseCommentsLoading } =
    useCaseContext();
  const collapsibleId = useId();

  // const annotations: any[] = useMemo(
  //   () => caseComments?.[currentCommentIdx]?.annotations ?? [],
  //   [caseComments, currentCommentIdx],
  // );

  if (!isCaseAnnotationsLoading && !caseAnnotations.length) {
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
            {isCaseAnnotationsLoading ? (
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
        {isCaseCommentsLoading ? (
          <CommentLoader />
        ) : (
          <Comments comments={caseComments} />
        )}
        <AnnotationWrapper>
          {isCaseAnnotationsLoading ? (
            <AnnotationLoader />
          ) : (
            <Annotations annotations={caseAnnotations ?? []} />
          )}
        </AnnotationWrapper>
      </CollapsibleBody>
    </Collapsible>
  );
}

export default Footer;
