import express from 'express';
import users from './users';

const router = express.Router();

// ここでの'/' が (url)/api/v1/ として扱われる
router.get('/', (_req, res) => {
  res.json({
    message: 'this is API Route. Hello Express.',
  });
});

// さらに細かくルーティングしていく
router.use('/users', users);

export default router;