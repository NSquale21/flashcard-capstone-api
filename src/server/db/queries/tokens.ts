import { Query } from '../';
import { MySQLResponse } from '../../types/models';
import { Payload } from '../../types/jwt';

const insert = (payload: Payload) => Query<MySQLResponse>('INSERT INTO tokens SET ?', payload);

const update = (token: string, id: number) => Query<MySQLResponse>('UPDATE tokens SET token = ? WHERE id = ?', [token, id]);

export default {
    insert,
    update
}