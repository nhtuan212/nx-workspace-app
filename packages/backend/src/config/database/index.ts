import mysql from 'mysql';

export const DatabaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: process.env.PUBLIC_DATABASE,
});

/// Database Connect
DatabaseConnection.connect(err => {
    if (err) throw err;
});
