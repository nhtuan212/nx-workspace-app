import express from 'express';
import NewsController from '../controllers/NewsController';

const router = express.Router();

export default router.get('/', NewsController.index);
