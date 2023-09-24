import React from 'react';
import { formatDistance } from 'date-fns';

import {
  Profile,
  Container,
  CommentedAt,
  CommentBody,
  CommentHeader,
  CommentWrapper,
} from './Comment.styles';

type Props = {
  comment?: any;
};

function Comment({ comment }: Props) {
  const timestamp = new Date(comment?.created_at).getTime();

  return (
    <Container>
      <CommentWrapper>
        <CommentHeader>
          <Profile>
            <span>{comment?.name}</span>
          </Profile>
          <CommentedAt>
            {formatDistance(timestamp, Date.now(), { addSuffix: true })}
          </CommentedAt>
        </CommentHeader>
        <CommentBody>{comment?.text}</CommentBody>
      </CommentWrapper>
    </Container>
  );
}

export default Comment;
