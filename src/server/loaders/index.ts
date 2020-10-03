import * as express from 'express';
import expressLoader from './express';
import mysqlLoader from './mysql';
// import passportLoaders from './passport';

export default async function({ app }: { app: express.Application }) {
    await expressLoader({ app });
    console.log('Express Loaded!');

    await mysqlLoader();
    console.log('DB Connected & Loaded!');
}