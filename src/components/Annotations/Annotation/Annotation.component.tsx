import React, { useMemo } from 'react';
import { AgentAvatar } from '@supportlogic/frontend-library';

import {
  Profile,
  Container,
  AnnotationAt,
  AnnotationBody,
  AnnotationHeader,
  AnnotationWrapper,
} from './Annotation.styles';
import { TNotes, formatDate } from '../../../common';

type Props = {
  annotation?: TNotes;
};

function Annotation({ annotation }: Props) {
  const createAt = useMemo(() => {
    if (!annotation?.s_created_at) return null;

    return formatDate(annotation?.s_created_at ?? '');
  }, [annotation?.s_created_at]);

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
          <AnnotationAt>{createAt}</AnnotationAt>
        </AnnotationHeader>
        <AnnotationBody>{annotation?.body}</AnnotationBody>
      </AnnotationWrapper>
    </Container>
  );
}

export default Annotation;
