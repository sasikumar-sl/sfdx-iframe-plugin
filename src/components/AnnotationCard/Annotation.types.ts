import { TComment } from 'components/Comments/Comments.types';

export type TAnnotation = {
  id: string;
  text: string;
  created_at: Date | string | number;
  comments?: TComment[];
  [k: string]: any;
};
