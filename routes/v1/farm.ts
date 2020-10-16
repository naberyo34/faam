import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { corsOptions } from '../../index';
import Farm from '../../models/farm';

const router = express.Router();

// ここでの'/' が (url)/api/v1/farm として扱われる

// cors middlewareを噛ませて、faam-spaからのリクエストのみを許可
router.use(cors(corsOptions));

// [GET] ファームの全件取得
router.get('/', (_req, res) => {
  Farm.find((err, data) => {
    if (err) {
      res.status(500).send('farm get failed.');
      return;
    }

    res.json(data);
  });
});

// [GET] 特定IDのファームを取得
router.get('/:id', (req, res) => {
  const targetId = req.params.id;
  Farm.find({ _id: targetId }, (err, data) => {
    if (err) {
      res.status(500).send('target farm get failed.');
      return;
    }

    res.json(data);
  });
});

// [POST] 新規ファームの追加
router.post('/', bodyParser.json(), (req, res) => {
  if (!req.body) {
    res.status(500).send('request body is empty.');
    return;
  }

  const instance = new Farm();
  instance.author = req.body.author;
  instance.title = req.body.title;
  instance.contributions = req.body.contributions;

  instance.save((err) => {
    if (err) {
      res.status(500).send('farm create failed.');
      return;
    }

    res.json({ message: 'farm create succeed.' });
  });
});

// [PUT] 対象ファームにcontributionを追加する
router.put('/:id/contribution', bodyParser.json(), (req, res) => {
  if (!req.body) {
    res.status(500).send('request body is empty.');
    return;
  }

  const targetId = req.params.id;
  Farm.updateOne(
    { _id: targetId },
    {
      $push: {
        contributions: {
          date: req.body.date,
          description: req.body.description,
        },
      },
    },
    (err) => {
      if (err) {
        res.status(500).send('farm update failed.');
        return;
      }

      res.json({ message: 'farm update succeed.' });
    }
  );
});

export default router;
