import { Router } from 'express';
import { getBannerImage } from '../service/image-service';
import { getCategoryIconImage } from '../service/image-service';
const router = Router();

router.get('/banner', getBannerImage);
router.get('/category-icon', getCategoryIconImage);

export default router;
