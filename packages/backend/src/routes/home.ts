import express from 'express';
import HomeController from '../controllers/HomeController';

const router = express.Router();

export default router.get('/', HomeController.index);
