import type { TUsers } from './models';
import { Request } from 'express';

export interface ReqUser extends Request {
    user: TUsers;
}

export type ResponseError = {
    status: number;
    message?: string;
    name?: string;
}