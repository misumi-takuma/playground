## 練習用テンプレート

いろいろ試す用テンプレート

## コマンド

```
// セットアップ
yarn

// CSSとJSを非圧縮で開発するコマンド
yarn dev

// CSSとJSを圧縮しつつ開発するコマンド
yarn prod

// ビルドコマンド（CSS、JSの圧縮）
yarn build
```

## HTML

HTML は EJS や Pug などのテンプレートエンジンは使ってません。
書いたそのままの HTML が dest にコピーされます。

## SCSS

SCSS でコードを書ける環境にしています。よく分からない場合は、`style.scss`に CSS を全部書いても OK です。
できれば入れ子や、コード分割して import なども挑戦してみましょう。
ソースマップ書き出すようにしてるので、要素検証で活用してください

## JavaScript

JavaScript を書けるようにしています。jQuery は入れてません。
課題では JS を使った表現までは必要ないですが、

## Images

画像は png、jpg、svg、gif の圧縮に対応してます。

## パッケージ一覧

`gulp-imagemin` と `imagemin-svgo` が Node14 系だとエラーになるためバージョンを下げています。

## 不具合や要望があれば連絡ください！
