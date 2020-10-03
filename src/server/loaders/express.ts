import * as express from 'express';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';
import config from '../config';
import routes from '../routes';
import logger, { stream } from './logger';
import { errors } from 'celebrate';
import type { ResponseError } from '../types/express';

export default async function ({ app }: { app: express.Application }) {
    
    app.get('/status', (req, res) => res.status(200).end());
    app.head('/status', (req, res) => res.status(200).end());

    app.enable('trust proxy');

    app.use(helmet());
    app.use(compression());
    app.use(cors());
    app.use(morgan(config.logs.morgan));
    app.use(express.json());
    app.use(routes());

    app.use(errors());

    app.use((req, res, next) => {
        const err = new Error('Not Found') as ResponseError;
        err['status'] = 404;
        next(err);
    });

    app.use(
        (
            err: ResponseError,
            req: express.Request,
            res: express.Response,
            next: express.NextFunction
        ) => {
            res.status(err.status || 500);
            logger.error(err);
            res.json({ errors: { message: err.message }});
        }
    );
}