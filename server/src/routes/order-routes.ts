import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';
import { decodeJWT } from '../middlewares/decode-jwt';
import { CreateOrderBody, UpdateOrderStatus } from '../../../shared';

import { getAllOrder, createOrder, updateStatus, getAllOrderProdutdsByOrderId } from '../service/order-service';

const router = Router();

// 검색
router.get('/', decodeJWT, getAllOrder);
router.get('/orderProduct/:orderId', decodeJWT, getAllOrderProdutdsByOrderId);

// 추가
router.post('/', decodeJWT, validateBody<CreateOrderBody>(['createdAt', 'latitude', 'longitude', 'cartList']), createOrder);

// 수정
router.put('/status', decodeJWT, validateBody<UpdateOrderStatus>(['id', 'status']), updateStatus);


export default router;
