import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const ProductModel = sequelize.define('products', {
    // Model options go here
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    categoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
        type: DataTypes.STRING,
    },
    thumbnail: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
    },
    slug: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
});
