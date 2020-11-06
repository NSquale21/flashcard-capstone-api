import { UserPreferences } from 'typescript';
import { Query } from '../';
import { Users } from '../../types/models';

const insert = (newUser: any) => Query('INSERT INTO users SET ?', newUser);

const find = (col: string, value: any) => Query<Users[]>('SELECT * FROM users WHERE ?? = ?', [col, value]);

export default {
    insert,
    find
}