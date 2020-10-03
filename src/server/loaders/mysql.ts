import * as mysql from 'mysql';
import config from '../config';

const state: { pool: mysql.Pool } = {
    pool: null
}

export const get = (): mysql.Pool => state.pool;

export default async function() {
    state.pool = mysql.createPool(config.mysql);
}