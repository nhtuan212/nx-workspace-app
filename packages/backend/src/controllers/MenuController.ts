import { API } from '../config/constants';
import { getMenuService } from '../services/MenuService';

export default new (class MenuController {
    /// [GET]/menu
    index = async (req: any, res: any) => {
        const { offset, limit } = req.query;
        const { statusCode, statusMessage } = res;

        return await getMenuService({ offset, limit })
            .then(data => {
                let message = statusMessage;
                let type = API.TYPE.ERROR;

                switch (statusCode) {
                    case API.STATUS_CODE.SUCCESS:
                        message = API.MESSAGE.PRODUCT_LIST_SUCCESS;
                        type = API.TYPE.SUCCESS;
                        data;
                        break;
                    default:
                        data = [];
                        break;
                }

                res.status(statusCode).json({
                    message,
                    type,
                    statusCode,
                    data,
                });
            })
            .catch((error: any) => {
                throw error;
            });
    };
})();
