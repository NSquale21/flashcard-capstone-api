import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import * as passportJwt from 'passport-jwt';
import { Application } from 'express';
import { comparePasswords } from '../utils/passwords';
import type { Payload } from '../types/jwt';
import config from '../config';
import db from '../db';

export default async function ({ app }: { app: Application }) {
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
					done(null, payload);
				} catch (error) {
					done(error);
				}
			}
		)
	);
	app.use(passport.initialize());
}