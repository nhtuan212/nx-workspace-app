import { Sequelize } from 'sequelize';
import { SeoModel } from '../models/SeoModel';

export const getSeoService = async ({ slug, offset, limit }) => {
    return await SeoModel.findAll({
        nest: true,
        attributes: ['slug', 'title', 'description'],
        where: {
            slug: slug || '',
        },
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
