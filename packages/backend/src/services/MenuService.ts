import { Sequelize } from 'sequelize';
import { MenuModel } from '../models/MenuModel';

export const getMenuService = async ({ offset, limit }) => {
    return await MenuModel.findAll({
        nest: true,
        attributes: ['id', 'name', 'slug'],
        where: {
            isActive: Sequelize.json('status.isActive', '1'),
        },
        offset: Number(offset) || 0,
        limit: Number(limit) || 10,
        order: [['id', 'ASC']],
    })
        .then((response: any) => {
            return response;
        })
        .catch((error: any) => {
            throw error;
        });
};
