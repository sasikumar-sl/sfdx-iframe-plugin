export type PaginationPostion =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type HeightType = string | number;

export type WrapperType = {
  numberOfSlides?: number;
  height?: HeightType;
  hasPagination?: boolean;
};

export type PagintionType = {
  position?: PaginationPostion;
};
