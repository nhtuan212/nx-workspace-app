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
});
