import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const CategoryModel = sequelize.define('categories', {
    // Model options go here
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    slug: { type: DataTypes.STRING },
});
