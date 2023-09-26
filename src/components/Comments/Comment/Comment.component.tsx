import React from 'react';
import { formatDistance } from 'date-fns';
import { AgentAvatar } from '@supportlogic/frontend-library';

import {
  Profile,
  Container,
  CommentedAt,
  CommentBody,
  CommentHeader,
  CommentWrapper,
} from './Comment.styles';
import { TComment } from '@/common';

type Props = {
  comment?: TComment;
};

function Comment({ comment }: Props) {
  const { name, text, isActive, profileUrl } = comment ?? {
    name: '',
    text: '',
    created_at: '',
    profileUrl: '',
  };
  const timestamp = new Date(comment?.created_at ?? '').getTime();

  return (
    <Container>
      <CommentWrapper>
        <CommentHeader>
          <Profile>
            <AgentAvatar
              agent={{ name }}
              isActive={isActive}
              avatarSize="24px"
              photo={profileUrl}
            />
            <span>{name}</span>
          </Profile>
          <CommentedAt>
            {formatDistance(timestamp, Date.now(), { addSuffix: true })}
          </CommentedAt>
        </CommentHeader>
        <CommentBody>{text}</CommentBody>
      </CommentWrapper>
    </Container>
  );
}

export default Comment;
