import type { Users } from './models';
import { Request } from 'express';
import { Payload } from './jwt';

export interface ReqUser extends Request {
    user: Users & Payload;
}

export type ResponseError = {
    status: number;
    message?: string;
    name?: string;
}