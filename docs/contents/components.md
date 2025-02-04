# コンポーネント粒度の考え方について

> [!NOTE]
> この考え方は、現在進行形であり、決定事項ではありません。今後、破壊的変更の可能性があります。

b4m では、Atomic design の考え方に基づき、独自に拡張するものである。

## Atom

それ以上分割できない

それ単体で成立する場合もあるし、しない場合もある。

### 例

- お知らせ記事のタイトル（成立）
- ラベル（成立しない）

### 今後整備する要素

- ラベルチップ
- ボタン
- トグルスイッチ

---

- 見出し
- 本文
- ディスクリプション
- キャプション

## Elements

Atoms の集合

Atoms 単体で成立しないものは、element になって、始めて成立する。

### 例

- ラベルと値

### 今後整備する要素

- キーバリュー
- お知らせアイテム
  - 日付とタイ卜ルの組み合わせ
  - そこに、カテゴリーが入る場合も

## Module

Elements、または Atoms の集合。

Elements のひとつずつは、それぞれ固有の異なった存在であること。

### 例

- Card

### 今後整備する要素

- 代表的なカードパターン
  - 天気カード
  - 人物プロフィールカード

## Organism

Module と同じレベルであるが、それ単体で画面全体遷移以外の機能を持つもの。

### 例

- 非同期検索

### 今後整備する要素

- モーダル
- カルーセル
- アコーディオン
- ドロップダウンメニュー
- ラジオグループ

## List

同じ属性の elements、modules､ organisms の集合

### 例

- お知らせ一覧
- ブログ記事一覧

## layout

Modules や Organisms を配置する枠組みのこと

block という概念があり、それぞれに枠の名前がある。(block ネームをもつ)

### 例

2 カラムレイアウト、3 カラムレイアウトなど

## Page または Screen

そのデバイスの画面全体を満たす概念。

リフローしたり、オフキャンバスがある場合もある。

## Site または System、App

Pages または Screen が集合し、ユーザーがなんらかの目的を達成するために存在するソフトウェア

---

## フォーム関連

### フォーム

フォーム

いわゆる`<form>`要素。1 つのページやスクリーンに複数存在する場合もある。

### フォームフィールド

いわゆる`<fieldset>`要素。フォーム内を複数のグループにまとめたい時に使用。グルーピングが必要でなければ、必ずしも使用しなくても良い。

見出しやフィールドの名称を表示する必要があれば、`<legend>`要素を利用する。

### フィールドエレメン卜

入力フィールドのこと。ただし、入力をサポートする情報や機能がひとまとまりになったもの。

### アシスト要素／アシスト機能

フォームの入力そのものには必要ではないが、入力を助けるために存在する要素や機能。

---

以下、WIP
