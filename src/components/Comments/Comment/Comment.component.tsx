import React from 'react';
import { TSegment } from '../../../common';

import { Card, CaseComment } from './Comment.styles';

type Props = {
  comment: TSegment;
};

function Comment({ comment }: Props) {
  return (
    <Card>
      <CaseComment>{comment?.original_content ?? ''}</CaseComment>
    </Card>
  );
}

export default Comment;
