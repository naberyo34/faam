![faam](https://user-images.githubusercontent.com/39970521/96222092-97d21180-0fc6-11eb-855e-aba04f4d9c6e.jpg)

# faam (API サーバー)

- 継続を楽しくするアプリ
- faam-spa (View)と連携して動作します。こちらはバックエンド側。

## 使用技術

- TypeScript
- Node.js / Express
- mySQL

### REST APIのメモ (自分用)

- GET `/farm` ファームの全件取得
- POST `/farm` ファームの新規作成
- GET `/farm/:id` 対象ファームの取得
- PUT `/farm/:id/contribution` 対象ファームにcontributionを追加
- DELETE `/farm/:id` 対象ファームの削除
