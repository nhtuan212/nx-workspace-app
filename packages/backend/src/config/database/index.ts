import { Sequelize } from 'sequelize';
import { config } from '../config';

// Db config
export const sequelize = new Sequelize(
    config[process.env.NODE_ENV]['database'],
    config[process.env.NODE_ENV]['username'],
    config[process.env.NODE_ENV]['password'],
    {
        host: config[process.env.NODE_ENV]['host'],
        dialect: config[process.env.NODE_ENV]['dialect'],
    },
);

export const dbConnect = async () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(error => {
            console.error('Unable to connect to the database: ', error);
        });
};
