このレポジトリは非公式です。bloxd.io公式ではありません

このレポジトリはbloxd.ioのcode apiのd.ts版を作成します。

## 使い方

`npm i bloxd.io.d.ts -D` をターミナルで使用します。(node.jsが必要です)

## なぜ使うのか

このnpmパッケージにはbloxd.io codeのd.tsが含まれているため、bloxd.io code api特有の関数などを機械に伝えることができます。
これは、typescriptの使用やapiの呼び出しミス、予測変換などに役立ちます。

## どう貢献するのか

- 新しいapi関数や未実装の関数などの追加
- jsdocなどのドキュメントの追加
- バグの報告/修正
- このパッケージの使用

## レポジトリの構造

```
src/
  api-type-def/ # api関数の定義
    clientOption/ # clientOptionの定義
      clientOptions/ # clientOptionの関数定義(clientOption名ごとの)
      index.ts # 関数定義の合体

    entitySetting/ # entitySettingの定義
      entitySettings/ # entitySettingの関数定義(entitySetting名ごとの)
      index.ts # 関数定義の合体
    mobSetting/ # mobsettingの定義
      mobSettings/ # mobsettingごとの型定義
      index.ts # 関数の定義
    normal/ # 他のapi関数の定義

    index.ts # 定義を合体する
  type/ # 型定義、たとえば`PlayerId`
  index.ts # 全体を合体しexportやglobal宣言

dist/ # tscのリザルトで、npmパッケージの本体
```
