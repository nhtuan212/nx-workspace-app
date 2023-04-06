import express from 'express';
import { homeIndex } from '../controllers/HomeController';

const router = express.Router();

export const HomeRouter = router.get('/', homeIndex);
