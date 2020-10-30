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
