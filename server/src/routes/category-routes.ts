import { Router } from 'express';
import { getAllCategory } from '../service/category-service';

const router = Router();

router.get('/', getAllCategory);

export default router;
