import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connection, corsOptions } from '../../index';

const router = express.Router();

// ここでの'/' が (url)/api/v1/posts として扱われる

// すべてのpostsを取得して返す
// cors middlewareを噛ませて、faam-spaからのリクエストのみを許可
router.get('/', cors(corsOptions), (_req, res) => {
  const searchQuery = `select * from posts`;
  connection.query(searchQuery, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

// IDに一致するデータを検索して返す
router.get('/:id', cors(corsOptions), (req, res) => {
  const userId = req.params.id;
  const query = `select * from posts where id=${userId}`;
  connection.query(query, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

// リクエストに従ってpostsを追加する
// bodyParser を噛ませないとreq.bodyがうまく取れない
router.post('/', cors(corsOptions), bodyParser.json(), (req, res) => {
  console.log(req.body);
  const { username, text } = req.body;
  const query = `insert into posts (username, text) value ('${username}', '${text}')`;
  connection.query(query, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json('success!');
  });
});

export default router;
