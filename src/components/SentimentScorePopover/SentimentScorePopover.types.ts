export type TSentimentScoreRange = {
  min: number;
  max?: number;
  title: string;
  background: string;
  color?: string;
};

export type TRangeBall = {
  isActive?: boolean;
  background: string;
  color?: string;
};

export type TLinkLine = {
  from: string;
  to: string;
};

export type TLabel = {
  isActive?: boolean;
};
