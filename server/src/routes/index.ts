import { Router } from 'express';
import authRouter from './auth-routes';
import categoryRouter from './category-routes';
import productRouter from './product-routes';
import cartRouter from './cart-routes';
import imageRouter from './image-routes';
import searchRouter from './search-routes';
import favoriteRouter from './favorite-routes';

const router = Router({});

router.use('/api/auth', authRouter);
router.use('/api/category', categoryRouter);
router.use('/api/product', productRouter);
router.use('/api/cart', cartRouter);
router.use('/api/image', imageRouter);
router.use('/api/search', searchRouter);
router.use('/api/favorite', favoriteRouter);

export default router;
