export type TDate = Date | string | number;

export type TMethodName = {
  methodName: string;
  [k: string]: unknown;
};

export type TData = {
  data: unknown;
};

export type TSalesforceData = {
  subtype: string;
  type: string;
  instance_url: string;
  parent_type: string;
  parent_id: string;
  parent_number: string;
  user_id: string;
  session_value: string;
  sl_api_url: string;
};

export type TScores = {
  sl_sentiment_score: number;
  sl_need_attention_score: number;
};

export type TObjectOwner = {
  object_id: string;
  object_type: string;
};

export type TUser = {
  s_id: string;
  name: string;
  user_photo?: string;
  is_active?: boolean;
};

export type TNotes = {
  s_id: string;
  s_created_at: Date | string;
  body: string;
  creator: TUser;
};

export type TSFCustomHeaders = {
  'Instance-Url': string;
  'User-Id': string;
  'Session-Id': string;
  'Parent-Id': string;
};

export type TCommentSpanData = {
  c_begin: number;
  c_end: number;
  [k: string]: any;
};

export type TComments = {
  id?: string;
  body: string;
  author_name: string;
  sl_created_at: Date | string;
  spans: TCommentSpanData[];
};

export type TypeCaseScoresData = {
  sl_sentiment_score: number;
  sl_need_attention_score: number;
};

export type TSegment = {
  s_id: string;
  s_created_at: Date | string;
  original_content: string;
  notes: TNotes[];
};

export type TCaseBasedSLData = {
  case_data: TypeCaseScoresData;
  comments: TComments[];
  segments: TSegment[];
};
