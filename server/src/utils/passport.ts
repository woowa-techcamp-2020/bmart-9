import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';
import { UserRepo } from '../repository/user-repository';
import { createJWT } from './jwt';
import { baseUrl, PORT } from '../urlConfig';

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${baseUrl}${PORT}/api/auth/github/callback`,
    },
    async (_, __, profile, cb) => {
      const existedUser = await UserRepo.findBySocialId(profile.id);
      if (existedUser) {
        const token = await createJWT(existedUser.id);
        return cb(null, token, token);
      }

      const createUserId = await UserRepo.createWithSocial({
        socialId: profile.id,
        name: profile.displayName || profile.username,
      });

      const token = await createJWT(createUserId);
      return cb(null, token, token);
    }
  )
);

export default passport;
