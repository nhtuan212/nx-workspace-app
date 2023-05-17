import { API } from '../config/constants';
import { CategoryService } from '../services/CategoryService';

// [GET]/:slug
export const categorySlug = async (req: any, res: any) => {
    const slug = req.params.slug;
    const { offset, limit } = req.query;
    const { statusCode, statusMessage } = res;

    return await CategoryService({ slug, offset, limit })
        .then(data => {
            let message = statusMessage;

            switch (statusCode) {
                case API.STATUS_CODE.SUCCESS:
                    message = API.MESSAGE.CATEGORY.LIST_SUCCESS;
                    data;
                    break;
                default:
                    data = [];
                    break;
            }

            res.status(statusCode).json({
                message,
                statusCode,
                data: data,
            });
        })
        .catch((error: any) => {
            throw error;
        });
};
