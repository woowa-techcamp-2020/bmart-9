import { Router } from 'express';
import {
  getRecentSearch,
  removeSearchHistory,
  createSearchHistory,
} from '../service/search-service';
import { decodeJWT } from '../middlewares/decode-jwt';
import { validateBody } from '../middlewares/validate-body';

const router = Router();

type TrySearch = {
  keyword: string;
};

router.get('/', decodeJWT, getRecentSearch);

router.delete('/:id', decodeJWT, removeSearchHistory);

router.post(
  '/',
  validateBody<TrySearch>(['keyword']),
  decodeJWT,
  createSearchHistory
);

export default router;
