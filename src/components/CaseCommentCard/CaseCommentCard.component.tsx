import React from 'react';

import { Card, CaseComment } from './CaseCommentCard.styles';
import { TAnnotation } from '../../common';

type Props = {
  caseCommment: TAnnotation;
};

function CaseCommentCard({ caseCommment }: Props) {
  return (
    <Card>
      <CaseComment>{caseCommment?.text}</CaseComment>
    </Card>
  );
}

export default CaseCommentCard;
