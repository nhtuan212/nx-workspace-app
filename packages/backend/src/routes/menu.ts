import express from 'express';
import MenuController from '../controllers/MenuController';

const router = express.Router();

export default router.get('/', MenuController.index);
