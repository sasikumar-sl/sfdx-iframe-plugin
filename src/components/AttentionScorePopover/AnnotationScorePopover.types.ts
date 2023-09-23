export type TAttentionScoreRange = {
  min: number;
  max?: number;
  title: string;
  background: string;
};

export type TRangeBall = {
  isActive?: boolean;
  background: string;
};

export type TLabel = {
  isActive?: boolean;
};

export type TLinkingLine = {
  from: string;
  to: string;
};
