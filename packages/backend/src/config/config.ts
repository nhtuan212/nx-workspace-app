export const config = {
    development: {
        database: process.env.PUBLIC_DATABASE_NAME,
        username: process.env.PUBLIC_DATABASE_USERNAME,
        password: process.env.PUBLIC_DATABASE_PASSWORD,
        host: process.env.PUBLIC_HOST,
        dialect: process.env.PUBLIC_DIALECT,
    },
    testing: {
        username: 'root',
        password: null,
        database: 'source',
        host: 'localhost',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: null,
        database: 'source',
        host: 'localhost',
        dialect: 'mysql',
    },
};
