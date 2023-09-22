import React from 'react';

import { AnnotationType } from './Annotation.interface';
import { Card, Annatation } from './AnnotationCard.styles';

type Props = {
  annotation: AnnotationType;
};

function AnnotationCard({ annotation }: Props): JSX.Element {
  return (
    <Card>
      <Annatation>
        {annotation?.id} - {annotation?.text}
      </Annatation>
    </Card>
  );
}

export default AnnotationCard;
