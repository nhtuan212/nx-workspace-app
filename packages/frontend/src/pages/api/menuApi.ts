import axios from 'axios';
import { HTTP_CODE } from '@/constants';

export const menuApi = {
    getMenu: async () => {
        return axios({
            method: 'get',
            url: 'https://61dd3beff60e8f0017668670.mockapi.io/menus',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response?.status === HTTP_CODE.SUCCESS) {
                    return response?.data;
                }
            })
            .catch(error => {
                return error?.response || {};
            });
    },
};
