import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const MenuModel = sequelize.define(
    'Menus',
    {
        name: DataTypes.STRING(50),
        slug: DataTypes.STRING(50),
    },
    {
        /// Model options go here
        tableName: 'menus',
        modelName: 'Menus',
    },
);
