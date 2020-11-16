import * as passport from 'passport';
import { Router } from 'express';
import { createToken } from '../../utils/tokens';
import type { ReqUser } from '../../types/express';

const loginRouter = Router();

export default function(authRouter: Router) {
    authRouter.use('/login', loginRouter);

    loginRouter.post('/', passport.authenticate('local'), async (req: ReqUser, res, next) => {
        const { id, email, role, banned } = req.user;
        try {
            const token = await createToken({ userid: id, email, role, banned });
            res.json(token);
        } catch (error) {
            next (error);
        }
    });
}