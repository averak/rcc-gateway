import { Component, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/model/product-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: ProductModel[] = [
    {
      title: 'RDID',
      description:
        'RDIDは各プロダクトのシングルサインオンを提供するIDプロバイダです。会員のアカウントを管理し、権限制御を行うことができます。',
      link: '/rdid',
    },
    {
      title: 'Cluster',
      description:
        'Clusterは部室の利用を予約するためのサービスです。コロナ禍の部室は入室制限があるので、事前に申請してから入室しましょう。',
      link: '/cluster',
    },
    {
      title: 'IAM',
      description:
        'IAMはロールベースアクセス制御システムです。プロダクトごとに別々の権限を割り当てることができます。',
      link: '/iam',
    },
    {
      title: 'Feetz',
      description: 'Feetzは会員の会費納入状況を管理するツールです。',
      link: '/feetz',
    },
    {
      title: 'Rippy',
      description: 'Rippyはイベントの日程調整サービスです。空きコマを確認する際などに使用します。',
      link: '/rippy',
    },
    {
      title: 'Purchase',
      description:
        'Purchaseは購入申請サービスです。追加で備品を購入したい時は、本サービスを通じて会計局へ申請してください。',
      link: 'purchase',
    },
    {
      title: 'Time Stamp',
      description:
        'Time Stampは会員との思い出を記録するアルバムです。イベントの旅にスタンプを記録し、追いコンなどで懐古しましょう。',
      link: '/timestamp',
    },
    {
      title: 'Form',
      description:
        'Formは会員向けフォームの作成ツールです。自分が回答済みかどうか、また未回答者の確認ができます。',
      link: '/form',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
