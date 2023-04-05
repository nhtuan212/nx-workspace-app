import { sequelize } from '../config/database';

export const MenuModel = sequelize.define('Menus', {
    // Model options go here
    tableName: 'menus',
    modelName: 'Menus',
});
