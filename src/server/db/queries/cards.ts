import { Query } from '../';
import type { Card, MySQLResponse } from '../../types/models';

const all = () => Query<Card[]>('SELECT * FROM cards');

const one = (id: number) => Query<Card[]>('SELECT * FROM cards WHERE id = ?', [id]);

const insert = (newCard: Card) => Query<MySQLResponse>('INSERT INTO cards SET ?', newCard);

const update = (updatedCard: any, id: number) => Query<MySQLResponse>('UPDATE cards SET ? WHERE id = ?', [updatedCard, id]);

const destroy = (id: number) => Query<MySQLResponse>('DELETE FROM cards WHERE id = ?', [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}