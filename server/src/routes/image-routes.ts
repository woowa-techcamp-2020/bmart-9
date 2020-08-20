import { Router } from 'express';
import { getBannerImage } from '../service/image-service';
const router = Router();

router.get('/banner', getBannerImage);

export default router;
