import { Router } from 'express';

import { getAllProduct, getProductById, updateProduct, createProduct, getProductByCategory2Id } from '../service/product-service';
import { validateBody } from '../middlewares/validate-body';
import { CreateProductBody } from '../../../shared';

const router = Router();

// all product
router.get('/', getAllProduct);

router.get('/:id', getProductById);

// Product update
router.put('/', updateProduct);

// Product create
router.post('/', createProduct);

router.get('/category/:category2_id', getProductByCategory2Id);

export default router;
