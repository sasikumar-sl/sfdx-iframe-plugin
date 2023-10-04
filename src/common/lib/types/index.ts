export type TDate = Date | string | number;

export type TComment = {
  name: string;
  id: string | number;
  text: string;
  created_at: TDate;
  userId?: string;
  profileUrl?: string;
  isActive?: boolean;
};

export type TAnnotation = {
  id: string;
  text: string;
  created_at: TDate;
  comments?: TComment[];
  [k: string]: any;
};

export type TSentiment = {
  id: string;
  text: string;
  labels: string[];
  created_at: TDate;
  annotations?: TAnnotation[];
  [k: string]: any;
};

export type TCaseDetails = {
  sentimentScore: number;
  attentionScore: number;
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
