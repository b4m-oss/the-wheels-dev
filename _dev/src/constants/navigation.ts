type NavigationCategory = {
  category: string;
  items: NavigationItem[];
};

type NavigationItem = {
  href: string;
  title: string;
  caption: string;
  ctaLabel: string;
};

export const navigationData: NavigationCategory[] = [
  {
    category: "ガイダンス",
    items: [
      {
        href: "/about/index.html",
        title: "はじめに",
        caption: "The Wheelsの考え方について説明します",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "デザインフロー",
        caption: "デザインを活用して計画実現をする流れについて",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "用語定義",
        caption: "The Wheelsで用いる概念の定義を説明します",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "情報設計",
        caption: "情報を適切に制御するために必要な考えについて",
        ctaLabel: "詳細を見る",
      },
    ],
  },
  {
    category: "コンセプトメイキング",
    items: [
      {
        href: "/about/index.html",
        title: "ゴールに旗を立てる",
        caption: "デザインに入る前の重要なゴール設定について",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "全人類文豪計画",
        caption: "何かを実現するには、言葉と文章が必要",
        ctaLabel: "詳細を見る",
      },
    ],
  },
  {
    category: "ヴィジュアルデザイン",
    items: [
      {
        href: "/about/index.html",
        title: "ヴィジュアルデザインの原則",
        caption: "視覚で捉えられる情報を適切に制御する",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "空間と強弱",
        caption: "文字や線の太さ、余白の面積、情報の密度について",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "タイポグラフィ",
        caption: "文字を組むための考え方、実際の組み方",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "色の扱い",
        caption: "色がもたらす効果と適切な使用について",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "写真の扱い",
        caption: "情報を伝えるために必要な写真の扱い方",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "トーン＆マナー",
        caption: "ヴィジュアルで伝える感情の表し方",
        ctaLabel: "詳細を見る",
      },
    ],
  },
  {
    category: "インタラクティブインターフェース",
    items: [
      {
        href: "/about/index.html",
        title: "ユーザーインターフェース",
        caption: "視覚で捉えられる情報を適切に制御する",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "コンポーネントの考え方",
        caption: "文字や線の太さ、余白の面積、情報の密度について",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "ブレイクポイントの考え方",
        caption: "文字を組むための考え方、実際の組み方",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "コンポーネント集",
        caption: "色がもたらす効果と適切な使用について",
        ctaLabel: "詳細を見る",
      },
    ],
  },
  {
    category: "The Wheelsの開発について",
    items: [
      {
        href: "/about/index.html",
        title: "開発方針",
        caption: "視覚で捉えられる情報を適切に制御する",
        ctaLabel: "詳細を見る",
      },
      {
        href: "/about/index.html",
        title: "技術スタック",
        caption: "文字や線の太さ、余白の面積、情報の密度について",
        ctaLabel: "詳細を見る",
      },
    ],
  },
  {
    category: "The Wheelsに関するお問い合わせ・ご意見・ご相談など",
    items: [
      {
        href: "/about/index.html",
        title: "お問い合わせ",
        caption: "",
        ctaLabel: "詳細を見る",
      },
    ],
  },
];
