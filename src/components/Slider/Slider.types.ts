export type TPaginationPostion =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type THeight = string | number;

export type TWrapper = {
  numberOfSlides?: number;
  height?: THeight;
  hasPagination?: boolean;
};

export type TPagintion = {
  position?: TPaginationPostion;
};
