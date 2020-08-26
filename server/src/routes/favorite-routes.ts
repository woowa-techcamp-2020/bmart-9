import { Router } from 'express';
import {
  getUsersFavorite,
  createFavorite,
  removeFavorite,
} from '../service/favorite-service';
import { decodeJWT } from '../middlewares/decode-jwt';
import { validateBody } from '../middlewares/validate-body';
import { FavoriteBody } from '../../../shared';

const router = Router();

router.get('/', decodeJWT, getUsersFavorite);

router.post(
  '/',
  decodeJWT,
  validateBody<FavoriteBody>(['productId']),
  createFavorite
);

router.delete('/:productId', decodeJWT, removeFavorite);

export default router;
