import * as jwt from 'jsonwebtoken';
import type { Payload } from '../types/jwt';
import config from '../config';

export const createToken = async (payload: Payload) => {
    const token = jwt.sign(payload, config.auth.secret, { expiresIn: config.auth.expires });
    return token;
}