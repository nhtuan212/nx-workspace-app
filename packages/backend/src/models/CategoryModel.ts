import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export const CategoryModel = sequelize.define('categories', {
    // Model options go here
    name: { type: DataTypes.STRING },
    slug: { type: DataTypes.STRING },
});
