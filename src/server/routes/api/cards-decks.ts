import { Router } from 'express';
import db from '../../db';

const cdRouter = Router();

export default function(apiRouter: Router) {
    apiRouter.use('/cardsdecks', cdRouter);

    cdRouter.post('/', async (req, res, next) => {
        const batchDTO = req.body;
        const batchedIds = batchDTO.deck_id.map((deck: number) => {
            return [Number(batchDTO.card_id), deck];
        });
        try {
            const result = await db.cards_decks.insert(batchedIds);
            res.json(result);
        } catch (error) {
            next(error);
        }
    });
}