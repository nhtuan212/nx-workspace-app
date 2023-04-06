import express from 'express';
import { categorySlug } from '../controllers/CategoryController';

const router = express.Router();

export const CategoryRouter = router.get('/:slug', categorySlug);
