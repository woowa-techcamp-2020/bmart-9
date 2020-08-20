import { Router } from 'express';
import authRouter from './auth-routes';
import categoryRouter from './category-routes';
import productRouter from './product-routes';
import cartRouter from './cart-routes';

const router = Router({});

router.use('/api/auth', authRouter);
router.use('/api/category', categoryRouter);
router.use('/api/product', productRouter);
router.use('/api/cart', cartRouter);

export default router;
