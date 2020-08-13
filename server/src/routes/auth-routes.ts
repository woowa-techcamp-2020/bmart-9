import { Router } from 'express';

import passport from '../utils/passport';
import { socialSignIn, getCurrentUser } from '../service/auth-service';
import { decodeJWT } from '../middlewares/decode-jwt';

const router = Router();

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/',
    session: false,
  }),
  socialSignIn
);

router.get('/current-user', decodeJWT, getCurrentUser);

export default router;
