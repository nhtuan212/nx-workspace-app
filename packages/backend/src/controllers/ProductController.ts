import { API } from '../config/constants';
import { GetProductService } from '../services/ProductService';

// [GET]/:slug
export const productSlug = async (req: any, res: any) => {
    const slug = req.params.slug;
    const { statusCode, statusMessage } = res;

    return await GetProductService({ slug })
        .then(data => {
            let message = statusMessage;

            switch (statusCode) {
                case API.STATUS_CODE.SUCCESS:
                    message = API.MESSAGE.PRODUCT.LIST_SUCCESS;
                    data;
                    break;
                default:
                    data = [];
                    break;
            }

            res.status(statusCode).json({
                message,
                statusCode,
                data: data[0],
            });
        })
        .catch((error: any) => {
            throw error;
        });
};
