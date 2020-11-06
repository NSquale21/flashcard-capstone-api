import passport from 'passport';
import LocalStrategy from 'passport-local';
import passportJwt from 'passport-jwt';
import config from '../config';
import db from '../db';
import { comparePasswords } from '../utils/passwords';
import { Payload } from '../types/jwt';

export default async function ({ app }: { app: Express.Application }) {
	passport.serializeUser((user, done) => done(null, user));
	passport.deserializeUser((user, done) => done(null, user));

	passport.use(
		new LocalStrategy.Strategy({ usernameField: 'email' }, async (email, password, done) => {
			try {
				const [user] = await db.users.find('email', email);
				if (user && comparePasswords(password, user.password)) {
					delete user.password;
					done(null, user);
				} else {
					done(null, false);
				}
			} catch (error) {
				done(error);
			}
		})
    );

    passport.use(
		new passportJwt.Strategy(
			{
				jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
				secretOrKey: config.auth.secret,
			},
			async (payload: Payload, done) => {
				try {
					const [user] = await db.users.find('id', payload.userid);
					if (user) {
						delete user.password;
						done(null, user);
					} else {
						done(null, false);
					}
				} catch (error) {
					done(error);
				}
			}
		)
	);
}