import * as express from 'express';
import expressLoader from './express';
import mysqlLoader from './mysql';
import passportLoader from './passport';

export default async function({ app }: { app: express.Application }) {
    await passportLoader({ app });
    console.log('Passport Loaded!');
    
    await expressLoader({ app });
    console.log('Express Loaded!');

    await mysqlLoader();
    console.log('DB Connected & Loaded!');
}