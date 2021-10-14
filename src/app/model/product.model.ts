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

  // 外部リンク
  externalLink: {
    reference: string;
    faq: string;
  };

  // サイドナビ
  navs: ProductSideNav[];
};
