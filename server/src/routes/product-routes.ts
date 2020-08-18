import { Router } from 'express';
import { getAllProduct, getProductById, updateProduct, createProduct } from '../service/product-service';
import { validateBody } from '../middlewares/validate-body';
import { CreateProductBody } from '../../../shared';
import { getProductByCategory2Id } from '../service/product-service';

const router = Router();
// all product
router.get('/', getAllProduct);

router.get('/:id', getProductById);

// Product update
router.put('/', updateProduct);

// Product create
router.post('/', createProduct);

// get product by category2_id
router.get('/:category2_id', getProductByCategory2Id);

export default router;
