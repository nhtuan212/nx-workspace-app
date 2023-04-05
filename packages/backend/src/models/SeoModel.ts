import { sequelize } from '../config/database';

export const SeoModel = sequelize.define('seos', {
    // Model options go here
    tableName: 'seos',
    modelName: 'Seos',
});
