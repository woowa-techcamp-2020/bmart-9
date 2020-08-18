import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';
import { CreateProductBody } from '../../../shared';
import { getProductByCategory2Id } from '../service/product-service';
const router = Router();

router.get('/:category2_id', getProductByCategory2Id);

export default router;
