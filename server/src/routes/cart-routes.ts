import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';

import { CreateCartBody, CartQuantity } from '../../../shared';

import { getAllCart, getCartByProductId, updateQuantity, deleteCart, createTestCart, createCart } from '../service/cart-service';

const router = Router();

// get all product
router.get('/', getAllCart);

router.get('/one/:id', getCartByProductId);

// update cart quantity
router.put('/quantity', validateBody<CartQuantity>(['id', 'quantity']), updateQuantity);

// delete Cart
router.delete('/:id', deleteCart);

router.get('/test/:id', createTestCart);

// create cart
router.post('/', validateBody<CreateCartBody>(['userId', 'productId', 'quantity']), createCart);




// router.get('/category/:category2_id', getProductByCategory2Id);
// router.get('/:id', getProductById);
// // Cart update
// // router.put('/', updateProduct);

// // Cart create
// router.post('/', validateBody<CreateCartBody>(["name", 'discount', 'image', 'price', 'basePrice', 'stock', 'createdAt', 'updatedAt', 'category2Id']), createProduct);


export default router;
