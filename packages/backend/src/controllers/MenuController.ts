import { API } from '../config/constants';
import { getMenuService } from '../services/MenuService';

// [GET]/menu
export const menuIndex = async (req: any, res: any) => {
    const { offset, limit } = req.query;
    const { statusCode, statusMessage } = res;

    return await getMenuService({ offset, limit })
        .then(data => {
            let message = statusMessage;

            switch (statusCode) {
                case API.STATUS_CODE.SUCCESS:
                    message = API.MESSAGE.MENU.LIST_SUCCESS;
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
