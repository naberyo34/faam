import express from 'express';
import { connection } from '../../index';

const router = express.Router();

// ここでの'/' が (url)/api/v1/users として扱われる

// すべてのusersを取得して返す
router.get('/', (_req, res) => {
  const searchQuery = `select * from users`;
  connection.query(searchQuery, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

// IDに一致するデータを検索して返す
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const searchQuery = `select * from users where id=${userId}`;
  connection.query(searchQuery, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

export default router;
