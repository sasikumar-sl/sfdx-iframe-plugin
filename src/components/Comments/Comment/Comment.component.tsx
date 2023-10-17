import React from 'react';
import { TComment } from '../../../common';

import { Card, CaseComment } from './Comment.styles';

type Props = {
  comment: TComment;
};

function Comment({ comment }: Props) {
  return (
    <Card>
      <CaseComment>{comment?.original_content ?? ''}</CaseComment>
    </Card>
  );
}

export default Comment;
