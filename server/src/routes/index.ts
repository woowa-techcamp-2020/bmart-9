import { Router } from 'express';
import authRouter from './auth-routes';
import productRouter from './product-routes';

const router = Router();

router.use('/api/auth', authRouter);
router.use('/api/product', productRouter);

export default router;
