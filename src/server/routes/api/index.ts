import { Router } from 'express';
import cards from './cards';
import decks from './decks';
import cardsdecks from './cards-decks';

const apiRouter = Router();

export default function(mainRouter: Router) {
    mainRouter.use('/api', apiRouter);

    cards(apiRouter);
    decks(apiRouter);
    cardsdecks(apiRouter);
}