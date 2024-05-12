## Playful Hand Mixとは
テキサスホールデムのハンドレンジの塗り絵が出来るアプリです。

![image](https://github.com/nebular-lab/play-ful-hand-mix/assets/78769350/2a66ff1c-f59a-4e51-bbdc-6bce55280e02)

## 使用技術

- Nextjs
- React
- TypeScript
- Chakra UI
- Recoil
- Zod
- Storybook

## 工夫したポイント
- 複雑でかつコンポーネントの数が多いプロダクトということもあり、Storybookを導入することで小さくコンポーネントを分割することを意識しやすいようにしました。特に、ビューとロジックを分割するすることを強く意識しました。(src/featureディレクトリにビューのためのコンポーネント、src/hooksディレクトリにロジックに関するカスタムフックが入っています。)

- テキサスホールデムは将棋と同じように[木構造](https://ja.wikipedia.org/wiki/%E3%82%B2%E3%83%BC%E3%83%A0%E6%9C%A8)でゲームの状態遷移を表現するのですが、そのデータ構造と表示に苦戦しました。木のノードとして、CardNode,PositionNode,ActionNode,StreetNode,HandNodeという異なる種類のノードのインターフェースを用意することで、実装の見通しが立ちやすくなりました。
今思えば、Nodeという抽象的なインターフェースを作ってそれを拡張するような構造にした方が良かったと思います。ちなみに、開発当初はfirestoreにデータを保存する予定だったのでデータのvalidationをしやすいようにzodを採用しましたが、DBへの保存機能は実装しない形になったのでzodの恩恵を受けられていません。
