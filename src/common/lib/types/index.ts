export type TDate = Date | string | number;

export type TAnnotation = {
  name: string;
  id: string | number;
  text: string;
  created_at: TDate;
  userId?: string;
  profileUrl?: string;
  isActive?: boolean;
};

export type TCaseComment = {
  id: string;
  text: string;
  created_at: TDate;
  comments?: TAnnotation[];
  [k: string]: any;
};

export type TSentiment = {
  id: string;
  text: string;
  labels: string[];
  created_at: TDate;
  annotations?: TCaseComment[];
  [k: string]: any;
};

export type TCaseDetails = {
  sentiments: TSentiment[];
};

export type TMethodName = {
  methodName: string;
  [k: string]: unknown;
};

export type TUserAndCaseDetails = {
  userId: string;
  userName: string;
  caseId: string;
  caseNumber: string;
};

export type TData = {
  data: unknown;
};

export type TGetUserCase = {
  user: [{ Id: string; Name: string; [k: string]: unknown }] | unknown;
  record: [{ Id: string; CaseNumber: string; [k: string]: unknown }] | unknown;
};

export type ArrayType<T> = T extends (infer U)[] ? U : any;

export type TCaseScores = {
  sl_ticket_id: string;
  sl_sentiment_score: number;
  sl_need_attention_score: number;
};

export type TSentimentNew = {
  sl_created_at: string;
  sl_author_name: string;
  sl_body: string;
  sl_comment_id: string;
  sl_span_counts: {
    [key: string]: number;
  };
  spans: {
    [key: string]: boolean;
  }[];
  is_deleted: boolean;
};
