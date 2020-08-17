import { Router } from 'express';
import { getAllProduct, getProductById, updateProduct, createProduct } from '../service/product-service';
const router = Router();

// all product
router.get('/', getAllProduct);

router.get('/:id', getProductById);

// Product update
router.put('/', updateProduct);

// Product create
router.post('/', createProduct);

export default router;
