import { sequelize } from '../config/database';

export const MenuModel = sequelize.define('menus', {
    // Model options go here
    tableName: 'menus',
    modelName: 'Menus',
});
