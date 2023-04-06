import { sequelize } from '../config/database';
import { CategoryModel } from './CategoryModel';

export const ProductModel = sequelize.define('products', {
    // Model options go here
});

ProductModel.belongsTo(CategoryModel, {
    foreignKey: 'categoryId',
    targetKey: 'id',
});
