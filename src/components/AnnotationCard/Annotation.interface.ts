import { CommentType } from 'components/Comments/Comments.interface';

export type AnnotationType = {
  id: string;
  text: string;
  created_at: Date | string | number;
  comments?: CommentType[];
  [k: string]: any;
};
