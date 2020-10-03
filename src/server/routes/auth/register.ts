import { Router } from 'express';

const registerRouter = Router();

export default function(authRouter: Router) {
    authRouter.use('/register', registerRouter);

    registerRouter.get('/', async (req, res, next) => {
        try {
            res.json('Registered!');
        } catch (error) {
            next(error);
        }
    });
}