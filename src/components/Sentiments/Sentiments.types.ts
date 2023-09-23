import { TAnnotation } from '../AnnotationCard/Annotation.types';

export type TSentiment = {
  id: string;
  text: string;
  labels: string[];
  created_at: Date | string | number;
  annotations?: TAnnotation[];
  [k: string]: any;
};
