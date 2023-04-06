import { Sequelize } from 'sequelize';
import { ProductModel } from '../models/ProductModel';
import { CategoryModel } from '../models/CategoryModel';

export const GetProductService = async ({ slug }) => {
    return await ProductModel.findAll({
        nest: true,
        attributes: [
            'id',
            'name',
            'slug',
            'thumbnail',
            'price',
            'description',
            'content',
        ],
        where: {
            // Check slug
            slug: slug,

            // Check isActive
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
        offset: 0,
        limit: 1,
    })
        .then((response: any) => {
            return response;
        })
        .catch((error: any) => {
            throw error;
        });
};
