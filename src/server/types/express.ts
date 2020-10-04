import type { User } from './models';
import { Request } from 'express';

export interface ReqUser extends Request {
    user: User;
}

export type ResponseError = {
    status: number;
    message?: string;
    name?: string;
}