export const environment = {
  production: true,

  // API
  API_BASE_URL: 'https://api.abelab.dev/crms',

  // 資格情報を保存するキー
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
      externalLink: {
        reference: 'https://scrapbox.io/ritscc-private/RCC_Gateway',
        faq: 'https://scrapbox.io/ritscc-private/FAQ_-_RCC_Gateway',
      },
      navs: [],
    },
    {
      title: 'Cluster',
      description:
        'Clusterは部室の利用を予約するためのサービスです。コロナ禍の部室は入室制限があるので、事前に申請してから入室しましょう。',
      url: '/cluster',
      version: 'v1.0',
      display: true,
      externalLink: {
        reference: 'https://scrapbox.io/ritscc-private/Cluster',
        faq: 'https://scrapbox.io/ritscc-private/FAQ_-_Cluster',
      },
      navs: [
        {
          label: '予約一覧',
          url: '/cluster/reservations',
          icon: 'event_note',
        },
        {
          label: '予約履歴',
          url: '/cluster/histories',
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
      externalLink: {
        reference: 'https://scrapbox.io/ritscc-private/RDID',
        faq: 'https://scrapbox.io/ritscc-private/FAQ_-_RDID',
      },
      navs: [
        {
          label: 'アカウント管理',
          url: '/rdid/users',
          icon: 'admin_panel_settings',
        },
        {
          label: '個人設定',
          url: '/rdid/mypage',
          icon: 'manage_accounts',
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
      externalLink: {
        reference: 'https://scrapbox.io/ritscc-private/IAM',
        faq: 'https://scrapbox.io/ritscc-private/FAQ_-_IAM',
      },
      navs: [
        {
          label: 'ユーザグループ',
          url: '/iam/user-groups',
          icon: 'manage_accounts',
        },
        {
          label: '権限設定',
          url: '/iam/quotas',
          icon: 'admin_panel_settings',
        },
      ],
    },
    {
      title: 'Kiri Tansu',
      description:
        'Kiri TansuはRCCの備品管理ツールです。会員は本サービスから備品・蔵書をレンタルすることができます。',
      url: '/kiri-tansu',
      version: '開発中',
      display: true,
      externalLink: {
        reference: '',
        faq: '',
      },
      navs: [
        {
          label: '備品一覧',
          url: '/kiri-tansu/items',
          icon: 'menu_book',
        },
      ],
    },
    {
      title: 'Butler',
      description: 'Butlerは会計申請フォームです。備品の購入申請や立替金の返金依頼を提出できます。',
      url: '/butler',
      version: '開発中',
      display: true,
      externalLink: {
        reference: '',
        faq: '',
      },
      navs: [
        {
          label: '購入申請',
          url: '/butler/purchase_requests',
          icon: 'menu_book',
        },
        {
          label: '返金依頼',
          url: '/butler/payback_requests',
          icon: 'credit_score',
        },
        {
          label: '申請管理',
          url: '/butler/manage',
          icon: 'manage_search',
        },
      ],
    },
  ],
};
