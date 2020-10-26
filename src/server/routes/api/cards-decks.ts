import { Router } from 'express';
import db from '../../db';

const cdRouter = Router();

export default function(apiRouter: Router) {
    apiRouter.use('/cardsdecks', cdRouter);

    cdRouter.post('/', async (req, res, next) => {
        const cardDeckDTO = req.body;
        try {
            const results = await db.cards_decks.insert(cardDeckDTO.card_id, cardDeckDTO.deck_id);
            res.json(results);
        } catch (error) {
            next(error);
        }
    });
}