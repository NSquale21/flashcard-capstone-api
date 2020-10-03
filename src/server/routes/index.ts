import { Router } from 'express';
import api from './api';
import auth from './auth';

export default function() {
    const mainRouter = Router();

    auth(mainRouter);
    api(mainRouter);

    return mainRouter;
}