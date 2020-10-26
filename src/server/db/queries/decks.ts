import { Query } from '../';

const all = () => Query('SELECT * FROM decks');

export default {
    all
}