import { Router } from 'express';
import { getAllCategory, getCategoryInfo } from '../service/category-service';

const router = Router();

router.get('/', getAllCategory);

router.get('/:id', getCategoryInfo);
export default router;
