import { Router } from 'express';

const loginRouter = Router();

export default function(authRouter: Router) {
    authRouter.use('/login', loginRouter);

    loginRouter.get('/', async (req, res, next) => {
        try {
            res.json('Login Worked!');
        } catch (error) {
            next (error);
        }
    });
}