import { Query } from '../';
import type { Cards, MySQLResponse } from '../../types/models';

const all = () => Query<Cards[]>('SELECT * FROM cards');

const one = (id: number) => Query<Cards[]>('SELECT * FROM cards WHERE id = ?', [id]);

const insert = (newCard: Cards) => Query<MySQLResponse>('INSERT INTO cards SET ?', newCard);

const update = (updatedCard: any, id: number) => Query<MySQLResponse>('UPDATE cards SET ? WHERE id = ?', [updatedCard, id]);

const destroy = (id: number) => Query<MySQLResponse>('DELETE FROM cards WHERE id = ?', [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}