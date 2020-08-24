import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';

import { CreateCartBody, CartQuantity, CartCheck } from '../../../shared';

import { getAllCart, setCheckAll, updateQuantity, deleteCart, deleteAllChecked, createTestCart, updateCheck } from '../service/cart-service';

const router = Router();

// get all product
router.get('/', getAllCart);

// update cart quantity
router.put('/quantity', validateBody<CartQuantity>(['id', 'quantity']), updateQuantity);
router.put('/check', validateBody<CartCheck>(['id', 'isCheck']), updateCheck);
router.put('/checkAll', validateBody<CartCheck>(['id', 'isCheck']), setCheckAll);

// delete Cart
router.delete('/:id', deleteCart);
router.delete('/checkAll/:userId', deleteAllChecked);

router.get('/test/:id', createTestCart);




// router.get('/category/:category2_id', getProductByCategory2Id);
// router.get('/:id', getProductById);
// // Cart update
// // router.put('/', updateProduct);

// // Cart create
// router.post('/', validateBody<CreateCartBody>(["name", 'discount', 'image', 'price', 'basePrice', 'stock', 'createdAt', 'updatedAt', 'category2Id']), createProduct);


export default router;
