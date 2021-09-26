export const environment = {
  production: true,

  // API
  API_BASE_URL: 'https://api.abelab.dev/crms',

  // ログイン情報
  CREDENTIALS_KEY: 'Authorization',

  // プロダクト一覧
  products: [
    {
      title: 'RCC Gateway',
      description:
        'RCC Gatewayは、averakが開発したRCC向けサービスを一元管理するアプリケーションです。',
      url: '/dashboard',
      version: 'v1.0',
      display: false,
      navs: [],
    },
    {
      title: 'Cluster',
      description:
        'Clusterは部室の利用を予約するためのサービスです。コロナ禍の部室は入室制限があるので、事前に申請してから入室しましょう。',
      url: '/cluster',
      version: 'v1.0',
      display: true,
      navs: [
        {
          label: '予約一覧',
          url: '/cluster/reservations',
          icon: 'date_range',
        },
        {
          label: '予約履歴',
          url: '/cluster/reservations/histories',
          icon: 'history',
        },
      ],
    },
    {
      title: 'RDID',
      description:
        'RDIDは各プロダクトのシングルサインオンを提供するIDプロバイダです。会員のアカウントを管理し、権限制御を行うことができます。',
      url: '/rdid',
      version: '開発中',
      display: true,
      navs: [
        {
          label: 'アカウント管理',
          url: '/rdid/users',
          icon: 'admin_panel_settings',
        },
      ],
    },
    {
      title: 'IAM',
      description:
        'IAMはロールベースアクセス制御システムです。RDIDと連携して、プロダクトごとに権限を割り当てることができます。',
      url: '/iam',
      version: '開発中',
      display: true,
      navs: [],
    },
  ],
};
