import { Sequelize } from 'sequelize';
import { ProductModel } from '../models/ProductModel';
import { CategoryModel } from '../models/CategoryModel';

export const GetProductService = async ({ slug }) => {
    const categoryAssociate = ProductModel.belongsTo(CategoryModel, {
        foreignKey: 'categoryId',
        targetKey: 'id',
    });

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
            'kind',
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
            // JOIN Category Model
            categoryAssociate,
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
