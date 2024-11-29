module.exports = {
  // 推奨設定を拡張
  extends: ["markuplint:recommended"],

  // ルールのカスタマイズ
  rules: {
    // 例：空のalt属性を許可
    "required-attr": {
      severity: "error",
      value: {
        img: ["alt"],
      },
    },

    // 例：特定のタグ内での改行を強制
    "newline-per-chars": {
      severity: "warning",
      value: {
        p: 80,
        li: 80,
      },
    },

    // 例：特定の属性の値をチェック
    "attr-value-quotes": {
      severity: "error",
      value: "double",
    },

    // 例：HTMLファイル内の重複IDを禁止
    "id-duplication": true,

    // 例：不要なタグを禁止
    "void-element-closing": true,
  },

  // カスタムルールを追加する場合（例として）
  nodeRules: [
    {
      tag: "img",
      rules: {
        "required-attr": {
          severity: "error",
          value: ["src", "alt"],
        },
      },
    },
  ],

  // カスタム設定（必要に応じて）
  childNodeRules: [
    {
      selector: "div > p",
      rules: {
        "attr-value-quotes": {
          severity: "error",
          value: "single",
        },
      },
    },
  ],
};
