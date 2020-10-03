import { Router } from 'express';

const decksRouter = Router();

export default function(apiRouter: Router) {
    apiRouter.use('/decks', decksRouter);

    decksRouter.get('/', async (req, res, next) => {
        try {
            res.json('It worked!')
        } catch (error) {
            next(error);
        }
    });
}