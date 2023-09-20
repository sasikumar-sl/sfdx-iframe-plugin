import React from "react";

import { Card, Annatation } from "./AnnotationCard.styles";
import { AnnotationType } from "./Annotation.interface";

type Props = {
    annotation: AnnotationType;
};

const AnnotationCard: React.FC<Props> = ({ annotation }) => {
    return <Card>
        <Annatation>{annotation?.id} - {annotation?.text}</Annatation>
    </Card>
};

export default AnnotationCard;
