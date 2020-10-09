import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
// import { corsOptions } from '../../index';
import User from '../../models/user';

const router = express.Router();

// ここでの'/' が (url)/api/v1/posts として扱われる

// cors middlewareを噛ませて、faam-spaからのリクエストのみを許可
// router.use(cors(corsOptions));

// リクエストに従ってpostsを追加する
// bodyParser を噛ませないとreq.bodyがうまく取れない
router.post('/', bodyParser.json(), (req, res) => {
  if (!req.body) {
    return res.status(500).send('request body is empty.');
  }

  const instance: any = new User();
  instance.name = req.body.name;
  instance.age = req.body.age;

  instance.save((err: any) => {
    if (err) {
      return res.status(500).send('failed');
    }

    return res.status(200).send('success');
  });
});

export default router;
