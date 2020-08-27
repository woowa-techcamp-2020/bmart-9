import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';
import { decodeJWT } from '../middlewares/decode-jwt';
import { CreateCartBody, CartQuantity } from '../../../shared';

import { getAllCart, getCartByProductId, updateQuantity, deleteCart, createTestCart, createCart } from '../service/cart-service';

const router = Router();

// 검색
router.get('/', decodeJWT, getAllCart);
router.get('/one/:productId', decodeJWT, getCartByProductId);
router.get('/test', decodeJWT, createTestCart);

// 수정
router.put('/quantity', decodeJWT, validateBody<CartQuantity>(['id', 'quantity']), updateQuantity);

// 삭제
router.delete('/:id', decodeJWT, deleteCart);

// 추가
router.post('/', decodeJWT, validateBody<CreateCartBody>(['productId', 'quantity']), createCart);

export default router;
