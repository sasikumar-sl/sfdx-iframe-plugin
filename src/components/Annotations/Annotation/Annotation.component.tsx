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
  const timestamp = new Date(annotation?.s_created_at ?? '').getTime();
  return (
    <Container>
      <AnnotationWrapper>
        <AnnotationHeader>
          <Profile>
            <AgentAvatar
              agent={{ name: annotation?.creator?.name ?? 'NA' }}
              isActive={annotation?.creator?.is_active ?? false}
              avatarSize="24px"
              photo={annotation?.creator?.user_photo ?? ''}
            />
            <span>{annotation?.creator?.name ?? 'NA'}</span>
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
