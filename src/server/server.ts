import * as express from 'express';
import config from './config';
// import logger from './loaders/logger';

async function startServer() {
    
    const app = express();

    (await import('./loaders')).default({ app });

    const port = process.env.PORT || 3000;
    app.listen(config.app.port, () => console.log(`Server listening on port: ${port}`));
}

startServer();