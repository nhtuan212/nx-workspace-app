import { Sequelize } from 'sequelize';
import { ProductModel } from '../models/ProductModel';
import { CategoryModel } from '../models/CategoryModel';

export const CategoryService = async ({ slug, offset, limit }) => {
    return await CategoryModel.findAll({
        nest: true,
        attributes: ['id', 'name', 'thumbnail', 'slug', 'type'],
        where: {
            // Check slug of categories table
            // '$categories.slug$': slug,
            slug: slug,

            // Check isActive of categories table
            isActive: Sequelize.literal(
                "JSON_EXTRACT(categories.status, '$.isActive')",
            ),
        },
        include: [
            // JOIN Product Model
            CategoryModel.belongsTo(ProductModel, {
                foreignKey: 'id',
                targetKey: 'categoryId',
            }),
        ],
        offset: Number(offset) || 0,
        limit: Number(limit) || 10,
    })
        .then((response: any) => {
            return response;
        })
        .catch((error: any) => {
            throw error;
        });
};
