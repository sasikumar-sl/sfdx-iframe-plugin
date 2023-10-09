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

function Annotation({ annotation }: Props) {
  const { name, text, isActive, profileUrl } = annotation ?? {
    name: '',
    text: '',
    created_at: '',
    profileUrl: '',
  };
  const timestamp = new Date(annotation?.created_at ?? '').getTime();

  return (
    <Container>
      <AnnotationWrapper>
        <AnnotationHeader>
          <Profile>
            <AgentAvatar
              agent={{ name }}
              isActive={isActive}
              avatarSize="24px"
              photo={profileUrl}
            />
            <span>{name}</span>
          </Profile>
          <AnnotationAt>
            {formatDistance(timestamp, Date.now(), { addSuffix: true })}
          </AnnotationAt>
        </AnnotationHeader>
        <AnnotationBody>{text}</AnnotationBody>
      </AnnotationWrapper>
    </Container>
  );
}

export default Annotation;
