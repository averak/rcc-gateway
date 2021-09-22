export const environment = {
  production: false,

  // API
  API_BASE_URL: 'http://localhost:8080',

  // ログイン情報
  CREDENTIALS_KEY: 'Authorization',

  // プロダクト一覧
  products: [
    {
      title: 'RCC Gateway',
      description:
        'RCC Gatewayは、averakが開発したRCC向けサービスを一元管理するアプリケーションです。',
      link: '/dashboard',
      version: 'v1.0',
      display: false,
    },
    {
      title: 'Cluster',
      description:
        'Clusterは部室の利用を予約するためのサービスです。コロナ禍の部室は入室制限があるので、事前に申請してから入室しましょう。',
      link: '/cluster',
      version: 'v1.0',
      display: true,
    },
    {
      title: 'RDID',
      description:
        'RDIDは各プロダクトのシングルサインオンを提供するIDプロバイダです。会員のアカウントを管理し、権限制御を行うことができます。',
      link: '/rdid',
      version: '開発中',
      display: true,
    },
    {
      title: 'IAM',
      description:
        'IAMはロールベースアクセス制御システムです。RDIDと連携して、プロダクトごとに権限を割り当てることができます。',
      link: '/iam',
      version: '開発中',
      display: true,
    },
  ],
};
