import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import db from '../../db';

const cardsRouter = Router();

export default function(apiRouter: Router) {
    apiRouter.use('/cards', cardsRouter);

    cardsRouter.get('/:id', celebrate({ 
        [Segments.PARAMS]: Joi.object({
            id: Joi.number().required()
        })
     }), async (req, res, next) => {
        const id = Number(req.params.id);
        try {
            const [card] = await db.cards.one(id);
            res.json(card);
        } catch (error) {
            next(error);
        }
    });

    cardsRouter.get('/', async (req, res, next) => {
        try {
            const cards = await db.cards.all();
            res.json(cards);
        } catch (error) {
            next(error);
        }
    });

    cardsRouter.post('/', celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            content: Joi.string().required()
        })
    }), async (req, res, next) => {
        const cardDTO = req.body;
        try {
            const results = await db.cards.insert(cardDTO);
            res.json(results);
        } catch (error) {
            next(error);
        }
    });

    cardsRouter.put('/:id', celebrate({
        [Segments.PARAMS]: Joi.object({
            id: Joi.number().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            user_id: Joi.number().required(),
            title: Joi.string().required(),
            content: Joi.string().required()
        })
    }), async (req, res, next) => {
        const id = Number(req.params.id);
        const updatedDTO = req.body;
        try {
            const results = await db.cards.update(updatedDTO, id);
            res.json(results);
        } catch (error) {
            next(error);
        }
    });

    cardsRouter.delete('/:id', celebrate({
        [Segments.PARAMS]: Joi.object({
            id: Joi.number().required()
        })
    }), async (req, res, next) => {
        const id = Number(req.params.id);
        try {
            const results = await db.cards.destroy(id);
            res.json(results);
        } catch (error) {
            next(error);
        }
    });
}