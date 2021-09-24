export type ProductSideNav = {
  label: string;
  url: string;
  icon: string;
};

export type ProductModel = {
  title: string;
  description: string;
  url: string;
  version: string;
  display: boolean;

  // サイドナビ
  navs: ProductSideNav[];
};
