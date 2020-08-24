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

// `
// SELECT
//     C1.id, C1.name,
//     GROUP_CONCAT(id) grouped_category2
// FROM
//     category2 as C2
// GROUP BY
//     category1_id
// JOIN
//     category1 as C1
// ON
//     C1.id=C2.category1_id;

// `

// SELECT category1_id, GROUP_CONCAT(id) grouped_category2 FROM category2 GROUP BY category1_id;
