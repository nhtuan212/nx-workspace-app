import { HTTP_CODE, METHOD } from '@/constants';
import { axiosClient } from '@services/axiosClient';
import ConfigApi from '@config/ConfigApi';

export const menuService = {
    getMenu: async () => {
        const url = ConfigApi.menuApi;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data;
            }
        });
    },
};
