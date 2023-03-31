// import mysql from 'mysql';
import { Sequelize } from 'sequelize';

// Db config
export const sequelize = new Sequelize(
    process.env.PUBLIC_DATABASE,
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
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

// const dbConfig = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: process.env.PUBLIC_DATABASE,
// });

// export default new (class Db {
//     connection = async () =>
//         new Promise((resolve, reject) => {
//             const connection = dbConfig.connect(error => {
//                 if (error) return reject(error);
//                 console.log('Db Connect successfully');
//                 return null;
//             });
//             resolve(connection);
//         });
//     query = async (query: any) =>
//         new Promise((resolve, reject) => {
//             dbConfig.query(query, (error: any, result: any) => {
//                 if (error) return reject(error);
//                 resolve(result);
//             });
//         });
// })();
