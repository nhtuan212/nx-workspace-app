import { HTTP_CODE, METHOD } from '@/constants';
import { axiosClient } from '@services/axiosClient';

export const productService = {
    hotProducts: async () => {
        const url = 'https://dummyjson.com/products?limit=40';
        const method = METHOD.GET;
        return axiosClient.excuted({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
    flashSaleProductAction: async () => {
        const url = 'https://dummyjson.com/products?limit=80';
        const method = METHOD.GET;
        return axiosClient.excuted({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
    listProduct: async () => {
        const url = 'https://dummyjson.com/products?limit=20';
        const method = METHOD.GET;
        return axiosClient.excuted({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
};
