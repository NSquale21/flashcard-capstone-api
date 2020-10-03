import { Router } from 'express';
// import db from '../../db';

const cardsRouter = Router();

export default function(apiRouter: Router) {
    apiRouter.use('/cards', cardsRouter);

    cardsRouter.get('/', async (req, res, next) => {
        try {
            // const cards = await db.cards.all();
            res.json('It worked!');
        } catch (error) {
            next(error);
        }
    });
}