import { Router } from 'express';
import db from '../../db';

const decksRouter = Router();

export default function(apiRouter: Router) {
    apiRouter.use('/decks', decksRouter);

    decksRouter.get('/', async (req, res, next) => {
        try {
            const decks = await db.decks.all();
            res.json(decks);
        } catch (error) {
            next(error);
        }
    });
}