import { API } from '../config/constants';
import { getSeoService } from '../services/SeoService';

export default new (class SeoController {
    // [GET]/seo
    index = async (req: any, res: any) => {
        const { slug, offset, limit } = req.query;
        const { statusCode, statusMessage } = res;

        return await getSeoService({ slug, offset, limit })
            .then(data => {
                let message = statusMessage;

                switch (statusCode) {
                    case API.STATUS_CODE.SUCCESS:
                        message = API.MESSAGE.SEO.LIST_SUCCESS;
                        data;
                        break;
                    default:
                        data = [];
                        break;
                }

                res.status(statusCode).json({
                    message,
                    statusCode,
                    data,
                });
            })
            .catch((error: any) => {
                throw error;
            });
    };
})();
