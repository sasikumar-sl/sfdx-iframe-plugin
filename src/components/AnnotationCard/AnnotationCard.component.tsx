import React from 'react';

import { Card, Annatation } from './AnnotationCard.styles';
import { TAnnotation } from '../../common';

type Props = {
  annotation: TAnnotation;
};

function AnnotationCard({ annotation }: Props) {
  return (
    <Card>
      <Annatation>
        {annotation?.id} - {annotation?.text}
      </Annatation>
    </Card>
  );
}

export default AnnotationCard;
