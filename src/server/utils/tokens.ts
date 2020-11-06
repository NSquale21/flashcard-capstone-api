import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import type { Payload } from '../types/jwt';
import db from '../db';
import config from '../config';

export const createToken = async (payload: Payload) => {
    payload.uniq = crypto.randomBytes(12).toString('hex');
    const { insertId } = await db.tokens.insert(payload);
    payload.id = insertId;
    const token = jwt.sign(payload, config.auth.secret, { expiresIn: config.auth.expires });
    await db.tokens.update(token, insertId);
    return token;
}