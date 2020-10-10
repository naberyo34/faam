import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
// import { corsOptions } from '../../index';
import User from '../../models/user';

const router = express.Router();

// ここでの'/' が (url)/api/v1/posts として扱われる

// cors middlewareを噛ませて、faam-spaからのリクエストのみを許可
// router.use(cors(corsOptions));

// 全てのユーザーを取得する
router.get('/', (_req, res) => {
  User.find((err, users) => {
    if (err) return res.status(500).send('get failed');

    res.json(users);
    return res.status(200).send('success');
  })
})

// リクエストに従ってpostsを追加する
// bodyParser を噛ませないとreq.bodyがうまく取れない
router.post('/', bodyParser.json(), (req, res) => {
  if (!req.body) {
    return res.status(500).send('request body is empty.');
  }

  const instance = new User();
  instance.name = req.body.name;
  instance.age = req.body.age;

  instance.save((err) => {
    if (err) return res.status(500).send('post failed');

    res.json({ message: 'user create succeed.' });
    return res.status(200).send('success');
  });
});

export default router;
