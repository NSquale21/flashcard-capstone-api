import { Router } from 'express';
import { createToken } from '../../utils/tokens';
import { generateHash } from '../../utils/passwords';
import db from '../../db/';

const registerRouter = Router();

export default function(authRouter: Router) {
    authRouter.use('/register', registerRouter);

    registerRouter.post('/', async (req, res, next) => {
        const newUser = req.body;
        newUser.password = generateHash(newUser.password);
        try {
            const results = await db.users.insert(newUser);
            const token = await createToken({ userid: results.insertId });
            res.json(token);
        } catch (error) {
            next(error);
        }
    });
}