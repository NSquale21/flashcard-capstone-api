import * as mysql from 'mysql';
import { get } from '../loaders/mysql';

export const Query = <T = any>(query: string, values?: any) => {
    const sql = mysql.format(query, values);
    
    return new Promise<T>((resolve, reject) => {
        get().query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

import cards from './queries/cards';
import decks from './queries/decks';
import users from './queries/users';
import cards_decks from './queries/cards-decks';

export default {
    cards,
    decks,
    users,
    cards_decks
}