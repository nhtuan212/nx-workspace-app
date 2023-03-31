import { QueryTypes } from 'sequelize';

import { Sequelize, Model, DataTypes } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize(process.env.PUBLIC_DATABASE, 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export const User = sequelize.define(
    'table_product',
    {
        name: DataTypes.TEXT,
    },
    {
        tableName: 'table_product',
    },
);

export const User2 = sequelize.query('SELECT * FROM `table_product`', {
    type: QueryTypes.SELECT,
});

(async () => {
    await sequelize.sync();
    // Code here
})();

// export default class User extends Model { }

// User.init({
// 	name: DataTypes.TEXT,
// }, {
// 	// Other model options go here
// 	sequelize, // We need to pass the connection instance
// 	modelName: 'table_products' // We need to choose the model name
// });

// console.log(User === sequelize.models.table_products);
