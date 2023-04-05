import express from 'express';
import SeoController from '../controllers/SeoController';

const router = express.Router();

export const SeoRouter = router.get('/', SeoController.index);
