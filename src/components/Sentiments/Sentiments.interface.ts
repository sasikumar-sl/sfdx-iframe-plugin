import { AnnotationType } from '../AnnotationCard/Annotation.interface';

export type SentimentType = {
  id: string;
  text: string;
  labels: string[];
  created_at: Date | string | number;
  annotations?: AnnotationType[];
  [k: string]: any;
};
