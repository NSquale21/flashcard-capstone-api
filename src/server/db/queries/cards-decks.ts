import { Query } from '../';

const insert = (card_id: number, deck_id: number) => Query('INSERT INTO card_decks (card_id, deck_id) VALUES (?, ?)', [card_id, deck_id]);

export default {
    insert
}