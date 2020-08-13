import { Router } from 'express';
import authRouter from './auth-routes';

const router = Router();

router.use('/api/auth', authRouter);

export default router;
