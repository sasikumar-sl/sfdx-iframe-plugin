import React from 'react';
import { formatDistance } from 'date-fns';
import { AgentAvatar } from '@supportlogic/frontend-library';

import {
  Profile,
  Container,
  AnnotationAt,
  AnnotationBody,
  AnnotationHeader,
  AnnotationWrapper,
} from './Annotation.styles';
import { TAnnotation } from '../../../common';

type Props = {
  annotation?: TAnnotation;
};

function getAgentProfile(): any {
  return { name: 'NA', url: '', isActive: false };
}

function Annotation({ annotation }: Props) {
  const timestamp = new Date(annotation?.s_created_at ?? '').getTime();
  const { name, url, isActive } = getAgentProfile();
  return (
    <Container>
      <AnnotationWrapper>
        <AnnotationHeader>
          <Profile>
            <AgentAvatar
              agent={{ name }}
              isActive={isActive}
              avatarSize="24px"
              photo={url}
            />
            <span>{name}</span>
          </Profile>
          <AnnotationAt>
            {formatDistance(timestamp, Date.now(), { addSuffix: true })}
          </AnnotationAt>
        </AnnotationHeader>
        <AnnotationBody>{annotation?.body}</AnnotationBody>
      </AnnotationWrapper>
    </Container>
  );
}

export default Annotation;
