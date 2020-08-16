import express from 'express';
import posts from './posts';

const router = express.Router();

// さらに細かくルーティングしていく
router.use('/posts', posts);

export default router;