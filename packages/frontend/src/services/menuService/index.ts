import { HTTP_CODE, METHOD } from '@/constants';
import { axiosClient } from '@services/axiosClient';

export const menuService = {
    getMenu: async () => {
        const url = 'https://61dd3beff60e8f0017668670.mockapi.io/menus';
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data;
            }
        });
    },
};
