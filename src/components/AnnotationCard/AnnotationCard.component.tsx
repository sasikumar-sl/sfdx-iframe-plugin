import React from 'react';

import { TAnnotation } from './Annotation.types';
import { Card, Annatation } from './AnnotationCard.styles';

type Props = {
  annotation: TAnnotation;
};

function AnnotationCard({ annotation }: Props): React.JSX.Element {
  return (
    <Card>
      <Annatation>
        {annotation?.id} - {annotation?.text}
      </Annatation>
    </Card>
  );
}

export default AnnotationCard;
