import express from 'express';
import farm from './farm';

const router = express.Router();

// さらに細かくルーティングしていく
router.use('/farm', farm);

export default router;
