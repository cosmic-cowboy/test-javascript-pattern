test-javascript-pattern
=======================

JavaScript パターン 写経

## １章　はじめに

### パターン
 - 典型的な問題に対する解決方法
    - ベストプラクティスでより良いコードを
    - 抽象概念で効率化を計り、難しい問題の詳細に立ち入らずに開発を進める
    - 特定の問題を解決するためのテンプレート
    - 開発者同士のコミュニケーションの活性化

## ２章　必須パターン

### 保守しやすいコードを書く
 - 時間が経過してからコードを再検討する際に必要な時間
    - 問題を把握し、理解するための時間
    - 解決できそうなコードを理解するための時間 
 - コードを書く時間より、読む時間が多くなっている
 - これらの問題を少しでも軽くするため
    - 読みやすく
    - 一貫性があり
    - 見通しがよく
    - 一人で書いたように
    - ドキュメントが整備されている

### グローバル変数の使用は最初に

### forループ
 - 配列の長さはキャッシュしておく
 for(var i = 0; l < array.length; i++)
 for(var i = 0, l = array.length; i < l; i+=1)
 ついでに変数宣言は関数の最初に持っていくとなお可

### for-inループ
 - オブジェクトには使っても良いが、配列には使わない
 - オブジェクトで使う際も、プロトタイプ連鎖から来たプロパティを考慮する必要がある

### 組み込みプロトタイプを拡張しない
 - Object(), Array(), Function()などを拡張したい誘惑には抗う
 - 保守性を著しく損ない、コードの見通しが悪くなり、他の開発者は追加機能を予測していない

### switchパターン
 - switchとcaseを揃える
 - case内はインデント
 - caseの最後はbreak;
 - switchの最後はdefault;

### 暗黙の型変換を避ける
 - 「===」「!==」を使う