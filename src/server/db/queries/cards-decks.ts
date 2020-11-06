import { Query } from '../';

const insert = (values: Array<Array<number>>) => Query('INSERT INTO card_decks (card_id, deck_id) VALUES ?', [values]);

export default {
    insert
}