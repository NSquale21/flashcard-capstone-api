import type { Users } from './models';
import { Request } from 'express';

export interface ReqUser extends Request {
    user: Users;
}

export type ResponseError = {
    status: number;
    message?: string;
    name?: string;
}