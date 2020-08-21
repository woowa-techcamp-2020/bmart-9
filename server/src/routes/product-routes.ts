import { Router } from 'express';
import {
  getAllProduct,
  getProductById,
  createProduct,
  getProductByCategory2Id,
  getProductsByCategory,
} from '../service/product-service';
import { validateBody } from '../middlewares/validate-body';
import { CreateProductBody } from '../../../shared';

const router = Router();

// all product
router.get('/', getAllProduct);

router.get('/category', getProductsByCategory);

router.get('/:id', getProductById);

// Product update
// router.put('/', updateProduct);

// Product create
router.post(
  '/',
  validateBody<CreateProductBody>([
    'name',
    'discount',
    'image',
    'price',
    'basePrice',
    'stock',
    'createdAt',
    'updatedAt',
    'category2Id',
  ]),
  createProduct
);

router.get('/category/:category2_id', getProductByCategory2Id);

export default router;
