import { Sequelize } from 'sequelize';
import { ProductModel } from '../models/ProductModel';
import { CategoryModel } from '../models/CategoryModel';

export const CategoryService = async ({ slug, offset, limit }) => {
    return await ProductModel.findAll({
        nest: true,
        attributes: ['id', 'name', 'slug', 'thumbnail', 'price'],
        where: {
            // Check slug of categories table
            '$category.slug$': slug,

            // Check isActive of products table
            isActive: Sequelize.literal(
                "JSON_EXTRACT(products.status, '$.isActive')",
            ),
        },
        include: [
            {
                // JOIN Category Model
                model: CategoryModel,
            },
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
