export type TDate = Date | string | number;

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

export type TScores = {
  sl_ticket_id: string;
  sl_sentiment_score: number;
  sl_need_attention_score: number;
};

export type TSentiment = {
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

export type TObjectOwner = {
  object_id: string;
  object_type: string;
};

export type TAnnotation = {
  s_id: string;
  s_object_creator: TObjectOwner;
  s_created_at: string;
  s_modified_at: string | null;
  s_deleted_at: string | null;
  s_seq_id: number;
  note_type: string;
  group_key: string;
  subject: string | null;
  body: string;
  summary: string | null;
  object_owner: TObjectOwner;
  parent: { s_id: string } | null;
  is_draft: boolean;
  recipient_list: any[]; // Replace with the actual type if known
  attachment_metadata_list: any[]; // Replace with the actual type if known
  child_notes?: TAnnotation[];
};

export type TComment = {
  s_id: string;
  s_object_creator: {
    object_id: string | null;
    object_type: string | null;
  };
  s_created_at: string;
  s_modified_at: string;
  s_deleted_at: string | null;
  s_seq_id: number;
  object_target: {
    object_id: string;
    object_type: string;
  };
  content_start: number;
  content_end: number;
  original_content: string;
};
