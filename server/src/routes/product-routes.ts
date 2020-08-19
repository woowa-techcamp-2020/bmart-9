import { Router } from 'express';
import { getAllProduct, getProductById, createProduct, getProductByCategory2Id } from '../service/product-service';
import { validateBody } from '../middlewares/validate-body';
import { CreateProductBody, GetProductByCategory2IdParams, GetProductByIdParams } from '../../../shared';

const router = Router();

// all product
router.get('/', getAllProduct);

router.get('/:id', validateBody<GetProductByIdParams>(['id']), getProductById);

// Product update
// router.put('/', updateProduct);

// Product create
router.post('/', validateBody<CreateProductBody>(["name", 'discount', 'image', 'price', 'basePrice', 'stock', 'createdAt', 'updatedAt', 'category2Id']), createProduct);

router.get('/category/:category2_id', validateBody<GetProductByCategory2IdParams>(['category2Id']), getProductByCategory2Id);

export default router;
