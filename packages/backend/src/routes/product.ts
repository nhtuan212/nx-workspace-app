import express from 'express';
import { productSlug } from '../controllers/ProductController';

const router = express.Router();

export const ProductRouter = router.get('/:slug', productSlug);
