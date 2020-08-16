import express from 'express';
import users from './users';

const router = express.Router();

// さらに細かくルーティングしていく
router.use('/users', users);

export default router;