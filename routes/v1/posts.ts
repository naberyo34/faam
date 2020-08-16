import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { pool, corsOptions } from '../../index';

const router = express.Router();

// ここでの'/' が (url)/api/v1/posts として扱われる

// cors middlewareを噛ませて、faam-spaからのリクエストのみを許可
router.use(cors(corsOptions));

// すべてのpostsを取得して返す
router.get('/', (_req, res) => {
  const searchQuery = `select * from posts`;
  pool.query(searchQuery, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

// IDに一致するデータを検索して返す
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const query = `select * from posts where id=${userId}`;
  pool.query(query, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

// リクエストに従ってpostsを追加する
// bodyParser を噛ませないとreq.bodyがうまく取れない
router.post('/', bodyParser.json(), (req, res) => {
  console.log(req.body);
  const { username, text } = req.body;
  const query = `insert into posts (username, text) value ('${username}', '${text}')`;
  pool.query(query, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json('success!');
  });
});

export default router;
