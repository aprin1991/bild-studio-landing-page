type CategoriesType = {
  id: number;
  title: string;
};

type ProductProp = {
  id: number;
  title: string;
  img: string;
  text: string;
};

type InfinitScrollProps = {
  products: Array<ProductProp>;
  loadMoreDate: Function;
  hasNext: boolean;
  display: string;
};
export type { CategoriesType, ProductProp, InfinitScrollProps };
