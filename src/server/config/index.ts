import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error('Could not find .env file!');
}

export default {
    mysql: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_SCHEMA
    },
    app: {
        port: parseInt(process.env.PORT, 10),
		api_prefix: process.env.API_PREFIX
    },
    auth : {
        secret: process.env.JWT_SECRET
    },
    logs :{
        morgan: process.env.MORGAN,
        level: process.env.LOG_LEVEL
    }
}