import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';
import { User } from '../repository/user-repository';
import { createJWT } from './jwt';
import { baseUrl } from '../urlConfig';

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${baseUrl}/api/auth/github/callback`,
    },
    async (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      const existedUser = await User.findOne(profile.id);
      if (existedUser) {
        const token = await createJWT(existedUser.id);
        return cb(null, null, token);
      }

      const [createUserId, error] = await User.createWithSocial({
        socialId: profile.id,
        name: profile.displayName,
      });

      const token = await createJWT(createUserId);
      return cb(null, null, token);
    }
  )
);

export default passport;
