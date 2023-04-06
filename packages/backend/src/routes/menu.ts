import express from 'express';
import { menuIndex } from '../controllers/MenuController';

const router = express.Router();

export const MenuRouter = router.get('/', menuIndex);
