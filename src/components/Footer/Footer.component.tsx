import React, { useState, useId } from 'react';
import Collapsible from 'react-collapsible';

import { FancyLoader } from '@supportlogic/frontend-library';
import { TAnnotation, TComment } from '../../common';
import useCaseContext from '../../reactCustomHooks/useCaseContext';

import {
  Label,
  Title,
  IconWrapper,
  LoaderWrapper,
  AnnotationWrapper,
  FooterContainer,
  CollapsibleBody,
  CollapsibleHeader,
  StyledDoubleUpIcon,
  StyledDoubleDownIcon,
} from './Footer.styles';
import Annotations from '../Annotations/Annotations.component';
import Comments from '../Comments/Comments.component';

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
  const { hasError, isCaseAnnotationsLoading } = useCaseContext();
  const collapsibleId = useId();

  // const annotations: any[] = useMemo(
  //   () => caseComments?.[currentCommentIdx]?.annotations ?? [],
  //   [caseComments, currentCommentIdx],
  // );

  if (isCaseAnnotationsLoading) {
    return (
      <LoaderWrapper>
        <Title>Case Annotations</Title>
        <FancyLoader size={10} />
      </LoaderWrapper>
    );
  }

  if (!caseAnnotations.length) {
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
          <Label>Case Annotations</Label>
          <IconWrapper>{icon}</IconWrapper>
        </CollapsibleHeader>
      }
    >
      <CollapsibleBody>
        <Comments comments={caseComments} />
        <AnnotationWrapper>
          <Annotations annotations={caseAnnotations ?? []} />
        </AnnotationWrapper>
      </CollapsibleBody>
    </Collapsible>
  );
}

export default Footer;
